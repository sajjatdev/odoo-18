# Start with a base image that supports Python 3.12
FROM ubuntu:22.04

# Update the system and install dependencies
RUN apt-get update && apt-get install -y \
    software-properties-common \
    curl \
    wget \
    build-essential \
    libssl-dev \
    zlib1g-dev \
    libbz2-dev \
    libreadline-dev \
    libsqlite3-dev \
    libffi-dev \
    libncurses5-dev \
    libgdbm-dev \
    libnss3-dev \
    liblzma-dev \
    && apt-get clean

# Add the deadsnakes PPA and install Python 3.12
RUN add-apt-repository ppa:deadsnakes/ppa && \
    apt-get update && \
    apt-get install -y python3.12 python3.12-distutils

# Install pip for Python 3.12
RUN curl -sS https://bootstrap.pypa.io/get-pip.py | python3.12

# Verify Python and pip installation
RUN python3.12 --version && pip --version

# Default command (adjust as needed)
CMD ["python3.12"]
