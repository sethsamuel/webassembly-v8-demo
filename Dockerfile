FROM mhart/alpine-node:7

ADD app /app

WORKDIR /app

ENV PATH $PATH:/usr/local/share/binaryen/bin

CMD ["./run.sh", "fib"]
