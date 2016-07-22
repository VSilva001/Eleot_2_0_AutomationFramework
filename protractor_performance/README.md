# Protractor and Performance Test

[Protractor](https://github.com/angular/protractor) is the end to end test case runner for [AngularJS](https://github.com/angular/angular.js/). These end to end test cases can be repurposed to record performance metrics when the scenario is being run. This is a sample repository with an example of how this can be done. 

## Usage

### Step 0 - Setup
Install all dependencies using `npm install`

### Step 1 - Prepare configuration
Protractor currently supports only synchronous configurations. [Here](https://github.com/angular/protractor/issues/578) is the issue asking for support of asynchronous configurations. Till this feature is added, you would need to generate a temporary configuration that would have the browser parameters required for performance analysis. Run to following command to generate `conf.js.tmp`. 

```
node index.js --config conf.js
```

### Step 2 - Run Protractor Tests
Once the configration file is generated, run protractor against this using 

```
node_modules/.bin/protractor conf.js.tmp
```

This will run the [example spec](https://gist.github.com/axemclion/9594795#file-example-spec-js) and also record the performance metrics. Note the calls to perfRunner in lines [4](https://gist.github.com/axemclion/9594795#file-example-spec-js-L4) [8](https://gist.github.com/axemclion/9594795#file-example-spec-js-L8) and  [16](https://gist.github.com/axemclion/9594795#file-example-spec-js-L16) that initialize, start and stop the performance metrics. 

## Using it in your projects

To start using it in your projects,

1. Add [browser-perf](http://npmjs.org/package/browser-perf) to your project 
2. Copy index.js and use it in your test case to mark the start and stop of the scenario. 
3. Ensure that in your build, you generate the configuration, live done in Step 1 above. 

