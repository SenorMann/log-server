FROM amazon/aws-lambda-nodejs:20

WORKDIR ${LAMBDA_TASK_ROOT}

COPY package.json code/index.js ./

RUN npm install --omit=dev

CMD ["index.main"]
