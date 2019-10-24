#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { NewStack } from '../lib/new-stack';

const app = new cdk.App();
new NewStack(app, 'NewStack');