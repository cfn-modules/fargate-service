const test = require('ava');
const cfntest = require('@cfn-modules/test');

test.serial('alb-single', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/alb-single.yml`, stackName, {}));
    const outputs = await cfntest.getStackOutputs(stackName);
    t.log(outputs);
    const res = await cfntest.probeHttpGet(`http://${outputs.DnsName}`);
    t.is(res.headers.server, 'nginx/1.20.2');
    t.true(res.data.includes('Hello World! (v1)'));
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});
