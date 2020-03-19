## Homepage Utility Scripts

Node.js utility scripts to manage and test content management against Strapi
backend for the AWebFactory.com homepage migration from Drupal 6 to fullstack
Javascript.

May eventually evolve into command-line CMS cli.

Much of the migration from Drupal 6 is being managed by our own
[DurableDrupal Drush scripts](https://github.com/DurableDrupal/drush-migration-scripts),
please feel free to check out that repo also.

## Common node + axios utility scripts

Common use for GET:

Create output directory. Then run something like the following (use quotation
marks if using multiple query params):

```bash
node scripts/get-api-request.js articles?name=One | json > output/featured.txt
200 OK

node scripts/get-api-request tags?_limit=1 | json > output/atag.txt
200 OK

node scripts/get-api-request "tags?tagSlug=ajax&tagSlug=kalabox" | json > output/2tags.txt
200 OK
```

Common use for POST:

The command line paramter `blog-posts` assumes API name of `/blog-posts` as well
as the presence of one or more items in the file
`./postit/post-blog-posts.json`.

Post data file `./postit/post-blog-posts.json` (in spite of
[tip in official docs](https://strapi.io/documentation/3.0.0-beta.x/content-api/api-endpoints.html),
using `id` instead of `_id` provokes a Mongoose error of type
`Cast to ObjectId failed`, so make sure you use `_id` for relationship fields):

```json
[
  {
    "title": "Latest blog post",
    "description": "This is the latest blog post",
    "body": "much better",
    "tags": [
      {
        "_id": "5e6a74efc9e24d7fdc2bf12a"
      },
      {
        "_id": "5e6a74f0c9e24d7fdc2bf139"
      },
      {
        "_id": "5e6a74efc9e24d7fdc2bf133"
      }
    ]
  }
]
```

or, thanks to a tip by @DMehaffy, you can simplify the array of tags:

```json
[
  {
    "title": "Latest blog post DMehaffy style",
    "description": "This is the latest blog post",
    "body": "much better",
    "tags": [
      "5e6a74efc9e24d7fdc2bf12a",
      "5e6a74f0c9e24d7fdc2bf139",
      "5e6a74efc9e24d7fdc2bf133"
    ]
  }
]
```

Command line execution of POST:

```bash
 node scripts/post-api-request.js blog-posts
200 OK
 {
  tags: [
    {
      _id: '5e6a74efc9e24d7fdc2bf12a',
      tagSlug: 'bitnami',
      tagName: 'bitnami',
      tagDescription: '',
      vocabSlug: 'freetags',
      vocabName: 'FreeTags',
      legacyTag: [Object],
      createdAt: '2020-03-12T17:44:15.881Z',
      updatedAt: '2020-03-12T17:44:15.887Z',
      __v: 1,
      id: '5e6a74efc9e24d7fdc2bf12a'
    },
    {
      _id: '5e6a74f0c9e24d7fdc2bf139',
      tagSlug: 'macvim',
      tagName: 'macvim',
      tagDescription: '',
      vocabSlug: 'freetags',
      vocabName: 'FreeTags',
      legacyTag: [Object],
      createdAt: '2020-03-12T17:44:16.084Z',
      updatedAt: '2020-03-12T17:44:16.091Z',
      __v: 1,
      id: '5e6a74f0c9e24d7fdc2bf139'
    },
    {
      _id: '5e6a74efc9e24d7fdc2bf133',
      tagSlug: 'mac',
      tagName: 'mac',
      tagDescription: '',
      vocabSlug: 'freetags',
      vocabName: 'FreeTags',
      legacyTag: [Object],
      createdAt: '2020-03-12T17:44:15.993Z',
      updatedAt: '2020-03-12T17:44:16.003Z',
      __v: 1,
      id: '5e6a74efc9e24d7fdc2bf133'
    }
  ],
  _id: '5e7094f982f2837d262aee5d',
  title: 'Latest blog post',
  description: 'This is the latest blog post',
  body: 'much better',
  createdAt: '2020-03-17T09:14:33.957Z',
  updatedAt: '2020-03-17T09:14:33.963Z',
  __v: 0,
  id: '5e7094f982f2837d262aee5d'
}
```

## node + needle utility scripts

Using
[Needle: The leanest and most handsome HTTP client in the Nodelands](https://github.com/tomas/needle)
for consistency (impressed by its more than
[7 million downloads per week (npm)](https://www.npmjs.com/package/needle).

Now, [Needle based scripts are working], and we use a simple `package.json`
script to execute:

<details><summary><strong>Click for GET details</strong></summary>

```
yarn get blog-posts/5e70a09482f2837d262aee5e
yarn run v1.22.1
$ node needle-scripts/get-api-request blog-posts/5e70a09482f2837d262aee5e
blog-posts/5e70a09482f2837d262aee5e
{
  tags: [
    {
      _id: '5e6a74efc9e24d7fdc2bf12a',
      tagSlug: 'bitnami',
      tagName: 'bitnami',
      tagDescription: '',
      vocabSlug: 'freetags',
      vocabName: 'FreeTags',
      legacyTag: [Object],
      createdAt: '2020-03-12T17:44:15.881Z',
      updatedAt: '2020-03-12T17:44:15.887Z',
      __v: 1,
      id: '5e6a74efc9e24d7fdc2bf12a'
    },
    {
      _id: '5e6a74f0c9e24d7fdc2bf139',
      tagSlug: 'macvim',
      tagName: 'macvim',
      tagDescription: '',
      vocabSlug: 'freetags',
      vocabName: 'FreeTags',
      legacyTag: [Object],
      createdAt: '2020-03-12T17:44:16.084Z',
      updatedAt: '2020-03-12T17:44:16.091Z',
      __v: 1,
      id: '5e6a74f0c9e24d7fdc2bf139'
    },
    {
      _id: '5e6a74efc9e24d7fdc2bf133',
      tagSlug: 'mac',
      tagName: 'mac',
      tagDescription: '',
      vocabSlug: 'freetags',
      vocabName: 'FreeTags',
      legacyTag: [Object],
      createdAt: '2020-03-12T17:44:15.993Z',
      updatedAt: '2020-03-12T17:44:16.003Z',
      __v: 1,
      id: '5e6a74efc9e24d7fdc2bf133'
    }
  ],
  _id: '5e70a09482f2837d262aee5e',
  title: 'Latest blog post DMehaffy authored',
  description: 'This is the latest blog post',
  body: 'much better',
  createdAt: '2020-03-17T10:04:04.172Z',
  updatedAt: '2020-03-17T10:04:04.175Z',
  __v: 0,
  id: '5e70a09482f2837d262aee5e'
}
Done in 0.21s.
```

</details>

<details><summary><strong>Click for POST details</strong></summary>

Given the data file at `postit/post-blog-posts`:

```
 cat postit/post-blog-posts.json
[
  {
    "title": "Simple blog post",
    "description": "This is the simplest blog post",
    "body": "much simpler",
    "tags": [
      "5e6a74efc9e24d7fdc2bf12a",
      "5e6a74f0c9e24d7fdc2bf139",
      "5e6a74efc9e24d7fdc2bf133"
    ]
  }
]
```

We simply do:

```bash
yarn post blog-posts
yarn run v1.22.1
$ node needle-scripts/post-api-request blog-posts
{
  tags: [
    {
      _id: '5e6a74efc9e24d7fdc2bf12a',
      tagSlug: 'bitnami',
      tagName: 'bitnami',
      tagDescription: '',
      vocabSlug: 'freetags',
      vocabName: 'FreeTags',
      legacyTag: [Object],
      createdAt: '2020-03-12T17:44:15.881Z',
      updatedAt: '2020-03-12T17:44:15.887Z',
      __v: 1,
      id: '5e6a74efc9e24d7fdc2bf12a'
    },
    {
      _id: '5e6a74f0c9e24d7fdc2bf139',
      tagSlug: 'macvim',
      tagName: 'macvim',
      tagDescription: '',
      vocabSlug: 'freetags',
      vocabName: 'FreeTags',
      legacyTag: [Object],
      createdAt: '2020-03-12T17:44:16.084Z',
      updatedAt: '2020-03-12T17:44:16.091Z',
      __v: 1,
      id: '5e6a74f0c9e24d7fdc2bf139'
    },
    {
      _id: '5e6a74efc9e24d7fdc2bf133',
      tagSlug: 'mac',
      tagName: 'mac',
      tagDescription: '',
      vocabSlug: 'freetags',
      vocabName: 'FreeTags',
      legacyTag: [Object],
      createdAt: '2020-03-12T17:44:15.993Z',
      updatedAt: '2020-03-12T17:44:16.003Z',
      __v: 1,
      id: '5e6a74efc9e24d7fdc2bf133'
    }
  ],
  _id: '5e73f34382f2837d262aee5f',
  title: 'Simple blog post',
  description: 'This is the simplest blog post',
  body: 'much simpler',
  createdAt: '2020-03-19T22:33:39.669Z',
  updatedAt: '2020-03-19T22:33:39.679Z',
  __v: 0,
  id: '5e73f34382f2837d262aee5f'
}
Done in 0.33s.
```

</details>

<small>Our original use of the
[Needle HTTP client package](https://www.npmjs.com/package/needle) inspired by
[Uploading A File To Strapi In Node.js - Drew Town Dev](https://www.drewtown.dev/post/uploading-a-file-to-strapi-in-node-js/)</small>
