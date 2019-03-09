import {getFixedResult, helper} from "./lintRunner";
import {Rule} from "./noFocusedTestsRule";

const rule = "no-focused-tests";

describe(rule, () => {
    it(`Should error on describe.only`, () => {
        const src = `describe.only("", () => {})`;
        const result = helper({src, rule});
        expect(result.errorCount).toBe(1);
    });

    it(`Should error on fdescribe`, () => {
        const src = `fdescribe("", () => {});`;
        const result = helper({src, rule});
        expect(result.errorCount).toBe(1);
    });

    it(`Should error on it.only`, () => {
        const src = `it.only("", () => {});`;
        const result = helper({src, rule});
        expect(result.errorCount).toBe(1);
    });

    it(`Should error on test.only`, () => {
        const src = `test.only("", () => {});`;
        const result = helper({src, rule});
        expect(result.errorCount).toBe(1);
    });

    it(`Should error on fit`, () => {
        const src = `fit("", () => {});`;
        const result = helper({src, rule});
        expect(result.errorCount).toBe(1);
    });

    it(`Should error on ftest`, () => {
        const src = `ftest("", () => {});`;
        const result = helper({src, rule});
        expect(result.errorCount).toBe(1);
    });

    it(`Should not error on test`, () => {
        const src = `test("", () => {});`;
        const result = helper({src, rule});
        expect(result.errorCount).toBe(0);
    });

    it(`Should not error on describe`, () => {
        const src = `("describe", () => {});`;
        const result = helper({src, rule});
        expect(result.errorCount).toBe(0);
    });

    it(`Should not error on it`, () => {
        const src = `it("", () => {});`;
        const result = helper({src, rule});
        expect(result.errorCount).toBe(0);
    });
});
