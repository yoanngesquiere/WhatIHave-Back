FROM dockerfile/nodejs:latest

ADD . /data/app
WORKDIR /data/app
RUN npm install
