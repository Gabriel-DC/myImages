FROM golang:1.23-alpine as builder

WORKDIR /usr/src/app

COPY app .

RUN go build -o binary .

FROM scratch

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/binary ./binary

CMD [ "./binary" ]
