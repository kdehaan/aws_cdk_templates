import cdk = require("@aws-cdk/core");
import s3 = require("@aws-cdk/aws-s3");

export class NewStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const siteSubDomain = "www";
    const domain = "kdehaan-static-site.com";
    const siteDomain = siteSubDomain + "." + domain;

    const siteBucket = new s3.Bucket(this, "SiteBucket1", {
      bucketName: siteDomain,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "error.html",
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    new cdk.CfnOutput(this, "Bucket", { value: siteBucket.bucketName });
  }
}
