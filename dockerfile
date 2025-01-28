FROM ubuntu:noble

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get upgrade -y

RUN apt install software-properties-common -y && add-apt-repository ppa:deadsnakes/ppa
RUN apt update && apt install python3.12
RUN python3.12 --version

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    build-essential \
    zlib1g-dev \
    libncurses5-dev \
    libgdbm-dev \
    libnss3-dev \
    libssl-dev \
    libreadline-dev \
    libffi-dev \
    libsqlite3-dev \
    wget \
    libbz2-dev && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

RUN curl -sS https://bootstrap.pypa.io/get-pip.py | python3.12 


WORKDIR /opt/odoo

COPY requirements.txt /opt/odoo

RUN pip3.12 install -r requirements.txt