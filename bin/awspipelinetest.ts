#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwspipelinetestStack } from '../lib/awspipelinetest-stack';

const app = new cdk.App();
new AwspipelinetestStack(app, 'AwspipelinetestStack', {
  env: {
    account: process.env.ACCOUNT_ID,
    region: 'us-east-1'
  }
});

app.synth();