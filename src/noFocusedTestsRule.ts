import * as Lint from 'tslint';
import * as ts from 'typescript';

export class Rule extends Lint.Rules.AbstractRule {
    static FAILURE_STRING = 'Unexpected focused test.';

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new Walk(sourceFile, this.getOptions()));
    }
}

class Walk extends Lint.RuleWalker {

    assertionCheck = new RegExp(/\.only$/);

    protected visitCallExpression(node: ts.CallExpression) {
        if (node.expression.getText().match(this.assertionCheck)) {
            this.addFailureAt(node.getStart(), node.getEnd() - node.getStart(), Rule.FAILURE_STRING);
        }
        super.visitCallExpression(node);
    }
}

