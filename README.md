# tslint-plugin-jest

TSLint Plugin for Jest 

[![Known Vulnerabilities](https://snyk.io/test/github/hardeep/tslint-plugin-jest/badge.svg?targetFile=package.json)](https://snyk.io/test/github/hardeep/tslint-plugin-jest?targetFile=package.json)


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

