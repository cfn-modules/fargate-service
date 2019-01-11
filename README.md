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
        AmbassadorImage: '' # optional
        AmbassadorPort: '8000' # optional
        AmbassadorEnvironment1: '' # optional
        AmbassadorEnvironment2: '' # optional
        AmbassadorEnvironment3: '' # optional
        AppImage: 'widdix/hello:v1' # optional
        AppPort: '80' # optional
        AppEnvironment1: '' # optional
        AppEnvironment2: '' # optional
        AppEnvironment3: '' # optional
        SidecarImage: '' # optional
        SidecarPort: '9000' # optional
        SidecarEnvironment1: '' # optional
        SidecarEnvironment1: '' # optional
        SidecarEnvironment1: '' # optional
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
      <td>AmbassadorImage</td>
      <td>Docker image to use for the ambassador container (https://docs.microsoft.com/en-us/azure/architecture/patterns/ambassador). You can use images in the Docker Hub registry or specify other repositories (repository-url/image:tag)</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AmbassadorPort</td>
      <td>The port exposed by the ambassador container that receives traffic from the load balancer (AmbassadorPort != AppPort != SidecarPort; ignored if AmbassadorImage and/or TargetModule are/is not set)</td>
      <td>8000</td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AmbassadorEnvironment1</td>
      <td>Environment variable for ambassador container (Key and value delimited by =>, e.g.: TIMOUT=>60)</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AmbassadorEnvironment2</td>
      <td>Environment variable for ambassador container (Key and value delimited by =>, e.g.: TIMOUT=>60)</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AmbassadorEnvironment3</td>
      <td>Environment variable for ambassador container (Key and value delimited by =>, e.g.: TIMOUT=>60)</td>
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
      <td>The port exposed by the app container that receives traffic from the load balancer or the ambassador container (AppPort != AmbassadorPort != SidecarPort; ignored if TargetModule is not set)</td>
      <td>80</td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AppEnvironment1</td>
      <td>Environment variable for app container (Key and value delimited by =>, e.g.: TIMOUT=>60)</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AppEnvironment2</td>
      <td>Environment variable for app container (Key and value delimited by =>, e.g.: TIMOUT=>60)</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AppEnvironment3</td>
      <td>Environment variable for app container (Key and value delimited by =>, e.g.: TIMOUT=>60)</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>SidecarImage</td>
      <td>Docker image to use for the sidecar container (https://docs.microsoft.com/en-us/azure/architecture/patterns/sidecar). You can use images in the Docker Hub registry or specify other repositories (repository-url/image:tag)</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>SidecarPort</td>
      <td>The port exposed by the sidecar container reachable from the app container on host localhost (SidecarPort != AmbassadorPort != AppPort)</td>
      <td>9000</td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>SidecarEnvironment1</td>
      <td>Environment variable for sidecar container (Key and value delimited by =>, e.g.: TIMOUT=>60)</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>SidecarEnvironment2</td>
      <td>Environment variable for sidecar container (Key and value delimited by =>, e.g.: TIMOUT=>60)</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>SidecarEnvironment3</td>
      <td>Environment variable for sidecar container (Key and value delimited by =>, e.g.: TIMOUT=>60)</td>
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

