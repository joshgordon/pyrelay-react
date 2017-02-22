# react-boilerplate

## Contributing

Use GitHub to fork this project, make and commit your changes, and then [submit a new pull request](https://github.com/enriquecaballero/react-hello-world/pulls).

### Updating `gh-pages`

We're just using the `dist` directory on the `gh-pages` branch to showcase our [demo](./src/website/Website.jsx).

After making your changes, run:

```shell
$ npm run build

# !! commit your changes here !!

$ git subtree push --prefix dist origin gh-pages
```

This updates the bundled code in the `dist` directory, then you commit the updated source, then push the `dist` directory to the root of the `gh-pages` branch.
