# import-maps poc

Project contains two folders

1. Consumer - This app uses the exported components via import-maps
2. Producer - This builds the component library.



## Build instructions

### Build and host the component library
`cd producer`
`npm ci`
`npm run build.and.serve`

### Run the consumer
In a second terminal

`/cd consumer`
`npm ci`
`npm run dev`


