import * as Lint from "tslint";
import * as ts from "typescript";
import {Walk} from "./noFocusedTestsWalk";

export class Rule extends Lint.Rules.AbstractRule {
    public static FAILURE_STRING = "Unexpected focused test.";

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new Walk(sourceFile, this.getOptions()));
    }
}
