# Instant preview server

Server for [vim-instant-preview](https://github.com/mnmly/vim-instant-preview)

It recieves `PUT` request from `vim-instant-preview` plugin, containing the filename and its content.
This server parses the request and emits 'preview' event so other app can consume it for their own build.

*Personal use for my [boilerplate](https://github.com/mnmly/boilerplate)*
