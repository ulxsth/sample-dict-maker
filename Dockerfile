FROM ubuntu:20.04

RUN apt update -y
RUN apt install -y mecab-utils

WORKDIR /home/app
COPY . .

CMD ["bash"]