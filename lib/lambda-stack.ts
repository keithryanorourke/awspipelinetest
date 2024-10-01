import * as cdk from "aws-cdk-lib";
import { Code, Runtime, Function } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import path = require("path");

export class MyLambdaStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    stageName: string,
    props?: cdk.StackProps
  ) {
    super(scope, id, props);
    new Function(this, "LambdaFunction", {
      runtime: Runtime.NODEJS_20_X,
      handler: "handler.handler",
      code: Code.fromAsset(path.join(__dirname, "lambda")),
      environment: { "stageName": stageName },
    });
  }
}
