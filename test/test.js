const test = require('ava');
const cfntest = require('@cfn-modules/test');
const axios = require('axios');

test('defaults', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/defaults.yml`, stackName, {}));
    // what could we test here?
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});

test('alb-single', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/alb-single.yml`, stackName, {}));
    const outputs = await cfntest.getStackOutputs(stackName);
    t.log(outputs);
    const res = await axios.post(`http://${outputs.DnsName}`);
    t.is(res.status, 200);
    t.is(res.headers.Server, 'Apache/2.4.23 (Unix)');
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});

test('nlb-single', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/nlb-single.yml`, stackName, {}));
    const outputs = await cfntest.getStackOutputs(stackName);
    t.log(outputs);
    const res = await axios.post(`http://${outputs.DnsName}`);
    t.is(res.status, 200);
    t.is(res.headers.Server, 'Apache/2.4.23 (Unix)');
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});
