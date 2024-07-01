import * as cdk from 'aws-cdk-lib';
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import * as path from "path";

export class RootStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new NodejsFunction(this, "lambdaFn", {
      depsLockFilePath: path.join(__dirname, "../package-lock.json"),
      entry: path.join(__dirname, "../code/index.ts"),
      handler: "main",
      memorySize: 256,
      runtime: Runtime.NODEJS_20_X,
      timeout: cdk.Duration.seconds(30),
    });
  }
}
