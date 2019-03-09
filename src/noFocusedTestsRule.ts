import * as Lint from "tslint";
import * as ts from "typescript";
import {Walk} from "./noFocusedTestsWalk";

export class Rule extends Lint.Rules.AbstractRule {

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new Walk(sourceFile, this.getOptions()));
    }
}
