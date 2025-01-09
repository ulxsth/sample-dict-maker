FROM ubuntu:20.04

RUN apt update -y
RUN apt install -y mecab mecab-utils mecab-ipadic-utf8

WORKDIR /home/app
COPY . .

CMD ["/bin/bash"]