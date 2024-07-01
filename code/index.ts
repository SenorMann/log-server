import { Context, LambdaFunctionURLEvent } from "aws-lambda";
import express from "express";
import serverless, { Handler } from "serverless-http";


const app = express();
app.use(express.json());

app.post("/logs", (req, res) => {
  console.log(req.body);
  res.status(201).end();
});

let handler: Handler;

export async function main(event: LambdaFunctionURLEvent, context: Context) {
  if (!handler) {
    handler = serverless(app);
  }

  return handler(event, context);
}