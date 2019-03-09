export class Walk extends Lint.RuleWalker {

    protected assertionChecks = [/\.only$/, /^ftest$/, /^fit$/, /^fdescribe$/];

    protected visitCallExpression(node: ts.CallExpression) {
        this.assertionChecks.forEach(exp => {
            if (node.expression.getText().match(exp)) {
                this.addFailureAt(node.getStart(), node.getEnd() - node.getStart(), Rule.FAILURE_STRING);
            }
        });
        super.visitCallExpression(node);
    }
}

