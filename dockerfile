FROM ubuntu:noble

RUN apt-get update && apt-get upgrade -y

RUN apt install software-properties-common -y && add-apt-repository ppa:deadsnakes/ppa
RUN apt update && apt install python3.12
RUN python3.12 --version
