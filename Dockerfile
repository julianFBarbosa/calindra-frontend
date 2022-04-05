FROM node:14-slim

WORKDIR /frontend

COPY package.json package-lock.json ./
RUN ci --silent
COPY . .

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

CMD npm run build
