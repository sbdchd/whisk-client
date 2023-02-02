# whisk client

> A very basic client to fetch recipe data from Whisk using their GRPC-web API.

This uses a fork (with a small patch to add Node.js support) of [Whisk's grpc-ts library][0]:

<https://github.com/sbdchd/grpc-ts/tree/steve/add-nodejs-support>

## usage

```sh
yarn install

s/build

s/run
```

## notes

The schema was extracted from the compiled protobuf output in [Whisk's JS chunks][1].

[0]: https://github.com/whisklabs/grpc-ts
[1]: https://web.archive.org/web/20230202031301/https://cdn.whisk.com/web/web-app/production/assets/main-c8d4e63e.4af129447c71efadc18e.js
