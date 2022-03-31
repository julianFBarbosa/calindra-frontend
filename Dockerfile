FROM node:14-slim
RUN apt-get update && apt-get install -y build-essential

WORKDIR /frontend

COPY package.json package-lock.json ./
RUN npm ci --silent
COPY . .

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

CMD npm run start