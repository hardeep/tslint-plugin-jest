# tslint-plugin-jest

TSLint Plugin for Jest 

# Usage


	 {
	   "extends": [
	+	"tslint-plugin-jest"
	   ],
	   "rules": {
	+       "no-focused-tests": true
	   }
	 }

## Rules

|Rules                                                               |
|--------------------------------------------------------------------|
| [no-focused-rules](#no-focused-rules)                              |


## no-focused-rules

Search for occurrences of:

  * [`describe.only`, `fdescribe`](https://jestjs.io/docs/en/api#describeonlyname-fn)
  * [`it.only`, `test.only`, `fit` and `ftest`](https://jestjs.io/docs/en/api#testonlyname-fn-timeout)

