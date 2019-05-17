[![Build Status](https://travis-ci.org/cfn-modules/fargate-service.svg?branch=master)](https://travis-ci.org/cfn-modules/fargate-service)
[![NPM version](https://img.shields.io/npm/v/@cfn-modules/fargate-service.svg)](https://www.npmjs.com/package/@cfn-modules/fargate-service)

# cfn-modules: Fargate service

Fargate service.

## Install

> Install [Node.js and npm](https://nodejs.org/) first!

```
npm i @cfn-modules/fargate-service
```

## Usage

```
---
AWSTemplateFormatVersion: '2010-09-09'
Description: 'cfn-modules example'
Resources:
  Service:
    Type: 'AWS::CloudFormation::Stack'
    Properties:
      Parameters:
        ClusterModule: !GetAtt 'Cluster.Outputs.StackName' # required
        VpcModule: !GetAtt 'Vpc.Outputs.StackName' # required
        TargetModule: '' # optional
        AlertingModule: '' # optional
        ClientSgModule1: '' # optional
        ClientSgModule2: '' # optional
        ClientSgModule3: '' # optional
        ManagedPolicyArns: '' # optional
        ProxyImage: '' # optional
        ProxyPort: '8000' # optional
        ProxyEnvironment1Key: '' # optional
        ProxyEnvironment1Value: '' # optional
        ProxyEnvironment2Key: '' # optional
        ProxyEnvironment2Value: '' # optional
        ProxyEnvironment3Key: '' # optional
        ProxyEnvironment3Value: '' # optional
        AppImage: 'widdix/hello:v1' # optional
        AppPort: '80' # optional
        AppEnvironment1Key: '' # optional
        AppEnvironment1Value: '' # optional
        AppEnvironment2Key: '' # optional
        AppEnvironment2Value: '' # optional
        AppEnvironment3Key: '' # optional
        AppEnvironment3Value: '' # optional
        AppEnvironment4Key: '' # optional
        AppEnvironment4Value: '' # optional
        AppEnvironment5Key: '' # optional
        AppEnvironment5Value: '' # optional
        AppEnvironment6Key: '' # optional
        AppEnvironment6Value: '' # optional
        SidecarImage: '' # optional
        SidecarPort: '9000' # optional
        SidecarEnvironment1Key: '' # optional
        SidecarEnvironment1Value: '' # optional
        SidecarEnvironment2Key: '' # optional
        SidecarEnvironment2Value: '' # optional
        SidecarEnvironment3Key: '' # optional
        SidecarEnvironment3Value: '' # optional
        Cpu: '0.25' # optional
        Memory: '0.5' # optional
        DesiredCount: '2' # optional
        MaxCapacity: '4' # optional
        MinCapacity: '2' # optional
        LogsRetentionInDays: '14' # optional
        SubnetsReach: 'Public' # optional
        AutoScaling: 'true' # optional
        HealthCheckGracePeriodSeconds: '60' # optional
      TemplateURL: './node_modules/@cfn-modules/fargate-service/module.yml'
```

## Examples

* [fargate-alb-proxy-pattern](https://github.com/cfn-modules/docs/tree/master/examples/fargate-alb-proxy-pattern)
* [fargate-alb-single-container](https://github.com/cfn-modules/docs/tree/master/examples/fargate-alb-single-container)

## Related modules

* [alb](https://github.com/cfn-modules/alb)
* [nlb](https://github.com/cfn-modules/nlb)

## Parameters

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Default</th>
      <th>Required?</th>
      <th>Allowed values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ClusterModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/ecs-cluster">ecs-cluster module</a></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tr>
    <tr>
      <td>VpcModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/vpc">vpc module</a></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tr>
    <tr>
      <td>TargetModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/search?q=keywords:cfn-modules:Target">module implementing Target</a></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AlertingModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/alerting">alerting module</a></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>ClientSgModule1</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/client-sg">client-sg module</a> module to mark traffic from EC2 instance</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>ClientSgModule2</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/client-sg">client-sg module</a> module to mark traffic from EC2 instance</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>ClientSgModule3</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/client-sg">client-sg module</a> module to mark traffic from EC2 instance</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>ManagedPolicyArns</td>
      <td>Comma-delimited list of IAM managed policy ARNs to attach to the task's IAM role</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>ProxyImage</td>
      <td>Docker image to use for the proxy container. You can use images in the Docker Hub registry or specify other repositories (repository-url/image:tag)</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>ProxyPort</td>
      <td>The port exposed by the proxy container that receives traffic from the load balancer (ProxyPort != AppPort != SidecarPort; ignored if ProxyImage and/or TargetModule are/is not set)</td>
      <td>8000</td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>ProxyEnvironment1Key</td>
      <td>Environment variable 1 key for proxy container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>ProxyEnvironment1Value</td>
      <td>Environment variable 1 value for proxy container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>ProxyEnvironment2Key</td>
      <td>Environment variable 2 key for proxy container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>ProxyEnvironment2Value</td>
      <td>Environment variable 2 value for proxy container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>ProxyEnvironment3Key</td>
      <td>Environment variable 3 key for proxy container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>ProxyEnvironment3Value</td>
      <td>Environment variable 3 value for proxy container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AppImage</td>
      <td>The Docker image to use for the app container. You can use images in the Docker Hub registry or specify other repositories (repository-url/image:tag)</td>
      <td>widdix/hello:v1</td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AppPort</td>
      <td>The port exposed by the app container that receives traffic from the load balancer or the proxy container (AppPort != ProxyPort != SidecarPort; ignored if TargetModule is not set)</td>
      <td>80</td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AppEnvironment1Key</td>
      <td>Environment variable 1 key for app container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AppEnvironment1Value</td>
      <td>Environment variable 1 value for app container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AppEnvironment2Key</td>
      <td>Environment variable 2 key for app container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AppEnvironment2Value</td>
      <td>Environment variable 2 value for app container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AppEnvironment3Key</td>
      <td>Environment variable 3 key for app container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AppEnvironment3Value</td>
      <td>Environment variable 3 value for app container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AppEnvironment4Key</td>
      <td>Environment variable 4 key for app container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AppEnvironment4Value</td>
      <td>Environment variable 4 value for app container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AppEnvironment5Key</td>
      <td>Environment variable 5 key for app container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AppEnvironment5Value</td>
      <td>Environment variable 5 value for app container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AppEnvironment6Key</td>
      <td>Environment variable 6 key for app container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AppEnvironment6Value</td>
      <td>Environment variable 6 value for app container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>SidecarImage</td>
      <td>Docker image to use for the sidecar container. You can use images in the Docker Hub registry or specify other repositories (repository-url/image:tag)</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>SidecarPort</td>
      <td>The port exposed by the sidecar container reachable from the app container on host localhost (SidecarPort != ProxyPort != AppPort)</td>
      <td>9000</td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>SidecarEnvironment1Key</td>
      <td>Environment variable 1 key for sidecar container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>SidecarEnvironment1Value</td>
      <td>Environment variable 1 value for sidecar container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>SidecarEnvironment2Key</td>
      <td>Environment variable 2 key for sidecar container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>SidecarEnvironment2Value</td>
      <td>Environment variable 2 value for sidecar container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>SidecarEnvironment3Key</td>
      <td>Environment variable 3 key for sidecar container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>SidecarEnvironment3Value</td>
      <td>Environment variable 3 value for sidecar container</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>Cpu</td>
      <td>The minimum number of vCPUs to reserve for the container</td>
      <td>0.25</td>
      <td>no</td>
      <td>[0.25, 0.5, 1, 2, 4]</td>
    </tr>
    <tr>
      <td>Memory</td>
      <td>The amount (in GB) of memory used by the task</td>
      <td>0.5</td>
      <td>no</td>
      <td>[0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]</td>
    </tr>
    <tr>
      <td>DesiredCount</td>
      <td>The number of simultaneous tasks, that you want to run on the cluster</td>
      <td>2</td>
      <td>no</td>
      <td>1-N</td>
    </tr>
    <tr>
      <td>MaxCapacity</td>
      <td>The maximum number of simultaneous tasks, that you want to run on the cluster</td>
      <td>4</td>
      <td>no</td>
      <td>1-N</td>
    </tr>
    <tr>
      <td>MinCapacity</td>
      <td>The minimum number of simultaneous tasks, that you want to run on the cluster</td>
      <td>2</td>
      <td>no</td>
      <td>1-N</td>
    </tr>
    <tr>
      <td>LogsRetentionInDays</td>
      <td>Specifies the number of days you want to retain log events in the specified log group</td>
      <td>14</td>
      <td>no</td>
      <td>[1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, 3653]</td>
    </tr>
    <tr>
      <td>SubnetsReach</td>
      <td>Should the service have direct access to the Internet or do you prefer private subnets with NAT?</td>
      <td>Public</td>
      <td>no</td>
      <td>[Public, Private]</td>
    </tr>
    <tr>
      <td>AutoScaling</td>
      <td>Scale number of tasks based on CPU load?</td>
      <td>true</td>
      <td>no</td>
      <td>[true, false]</td>
    </tr>
    <tr>
      <td>HealthCheckGracePeriodSeconds</td>
      <td>The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing target health checks after a task has first started (ignored if TargetModule is not set)</td>
      <td>60</td>
      <td>no</td>
      <td>0-1800</td>
    </tr>
  </tbody>
</table>

## Migration Guides

### Migrate to v2

* Rename `AmbassadorImage` to `ProxyImage`.
* Rename `AmbassadorPort` to `ProxyPort`.
* Rename `AmbassadorEnvironment1Key` to `ProxyEnvironment1Key`.
* Rename `AmbassadorEnvironment1Value` to `ProxyEnvironment1Value`.
* Rename `AmbassadorEnvironment2Key` to `ProxyEnvironment2Key`.
* Rename `AmbassadorEnvironment2Value` to `ProxyEnvironment2Value`.
* Rename `AmbassadorEnvironment3Key` to `ProxyEnvironment3Key`.
* Rename `AmbassadorEnvironment3Value` to `ProxyEnvironment3Value`.
