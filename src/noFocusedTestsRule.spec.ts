import {getFixedResult, helper} from './lintRunner';
import {Rule} from './noFocusedTestsRule';

const rule = 'no-focused-tests';

describe('Disallow .only statements', () => {
    it(`testing failing example`, () => {
        const src = `
                describe("Something", () => {
                    it.only("Only run this test", () => {});
                })
            `;
        const result = helper({src, rule});
        expect(result.errorCount).toBe(1);
    });

    it(`testing passing example`, () => {
        const src = `
                describe("Something", () => {
                    it("Only run this test", () => {});
                })
            `;
        const result = helper({src, rule});
        expect(result.errorCount).toBe(0);
    });
});
