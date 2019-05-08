const test = require('ava');
const cfntest = require('@cfn-modules/test');
const axios = require('axios');

test.serial('defaults', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/defaults.yml`, stackName, {}));
    // what could we test here?
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});

test.serial('alb-single', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/alb-single.yml`, stackName, {}));
    const outputs = await cfntest.getStackOutputs(stackName);
    t.log(outputs);
    const res = await axios.get(`http://${outputs.DnsName}`);
    t.is(res.headers.server, 'Apache/2.4.23 (Unix)');
    t.true(res.data.includes('It works!'));
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});

test.serial('nlb-single', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/nlb-single.yml`, stackName, {}));
    const outputs = await cfntest.getStackOutputs(stackName);
    t.log(outputs);
    const res = await axios.get(`http://${outputs.DnsName}`);
    t.is(res.headers.server, 'Apache/2.4.23 (Unix)');
    t.true(res.data.includes('It works!'));
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass();
  }
});