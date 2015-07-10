# hapiify

> Converts Hapi routes into Express compatible routes

This is a transform for the Taunus command-line interface, compiling Hapi routes into [`ruta3`][1] compatible routes.

# Install

```shell
npm install hapiify --save
```

# Use

Simply supplying `taunus` with this package, as shown below, will yield client-side Taunus compatible routes based on your Hapi server-side routes.

```shell
taunus -t hapiify
```

**Disclaimer:** the `{name*2}` syntax is silly and it's not supported.

# License

MIT

[1]: https://github.com/bevacqua/ruta3
