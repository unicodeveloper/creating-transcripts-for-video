## Creating Transcript For Videos

This is a repo that accompanies the tutorial that shows how to programmatically create transcripts for videos.

## Installation

[Node.js](https://nodejs.org) 0.4+ required.

```bash

# Get the project
git clone https://github.com/unicodeveloper/creating-transcripts-for-video.git creating-transcripts-for-video

# Change directory
cd creating-transcripts-for-video

# Replace the default values of cloud_name, api_key, and api_secret with real values from the [Cloudinary Dashboard](https://cloudinary.com/console)

cloudinary.config({
    cloud_name: 'xxxxxxxxx',
    api_key: 'xxxxxxxxx',
    api_secret: 'xxxxxxxxx'
});

# Install the dependencies
npm install

# Run your app
nodemon server.js

```


## Usage - Postman

```bash

# Route 1
GET - http://localhost:3333/test

# Route 2
POST - http://localhost:3333/upload

```

## How can I thank you?

Why not star the GitHub repo? I'd love the attention! Why not share the link for this repository on Twitter or HackerNews? Spread the word!

Don't forget to [follow me on twitter](https://twitter.com/unicodeveloper)!

Thanks!
Prosper Otemuyiwa.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.