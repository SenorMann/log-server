import * as cdk from 'aws-cdk-lib';
import { DockerImageCode, DockerImageFunction } from "aws-cdk-lib/aws-lambda";
import * as path from "path";

export class RootStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new DockerImageFunction(this, "lambdaFn", {
      allowAllOutbound: true,
      code: DockerImageCode.fromImageAsset(path.join(__dirname, '../')),
      memorySize: 256,
      timeout: cdk.Duration.seconds(30),
    });
  }
}
