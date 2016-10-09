FROM webassembly-v8

ADD app /app

WORKDIR /app

CMD ["run.sh", "fib"]
