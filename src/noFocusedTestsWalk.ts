import * as Lint from "tslint";
import * as ts from "typescript";

export class Walk extends Lint.RuleWalker {

    public static FAILURE_STRING = "Unexpected focused test.";

    protected assertionChecks = [/\.only$/, /^ftest$/, /^fit$/, /^fdescribe$/];

    protected visitCallExpression(node: ts.CallExpression) {
        this.assertionChecks.forEach(exp => {
            if (node.expression.getText().match(exp)) {
                this.addFailureAt(node.getStart(), node.getEnd() - node.getStart(), Walk.FAILURE_STRING);
            }
        });
        super.visitCallExpression(node);
    }
}

