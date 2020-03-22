# Homepage Utility Scripts

Node.js utility scripts to manage and test content management against Strapi
backend for the AWebFactory.com homepage migration from Drupal 6 to fullstack
Javascript.

May eventually evolve into command-line CMS cli.

Much of the migration from Drupal 6 is being managed by our own
[DurableDrupal Drush scripts](https://github.com/DurableDrupal/drush-migration-scripts),
please feel free to check out that repo also.

## Using Node.js + Needle utility scripts

Curiosity concerning Needle aroused very recently by
[Uploading A File To Strapi In Node.js - Drew Town Dev](https://www.drewtown.dev/post/uploading-a-file-to-strapi-in-node-js/)

Now really impressed by Needle's more than
[7 million downloads per week (npm)](https://www.npmjs.com/package/needle), and
how well it works.

I've been working with
[plain node scripts](https://github.com/awebfactory/homepage-utility-scripts/tree/plain-node-scripts)
for my HTTP requests utilities and tests up till now. Now I'm mainly using
[Needle: The leanest and most handsome HTTP client in the Nodelands](https://github.com/tomas/needle)
for consistency.

Needle based scripts are working on all operations in these utility scripts, and
we use simple `package.json` script directives to easily execute them using
convention based data files:

### GET

<details><summary><strong>Click for GET count of all existing blog posts, GET all, GET with limit of 3 or find by title</strong></summary>

<details><summary>Count (using Strapi `count` API)</summary>

```bash
yarn get blog-posts/count
yarn run v1.22.1
$ node needle-scripts/get-api-request blog-posts/count
9
Done in 0.21s.

yarn get tags/count
yarn run v1.22.1
$ node needle-scripts/get-api-request tags/count
178
Done in 0.21s.
```

</details>

<details><summary>Get (all)</summary>

```json
yarn get blog-posts
yarn run v1.22.1
$ node needle-scripts/get-api-request blog-posts
[
    {
        "tags": [],
        "_id": "5e3556739d28fe03758b1c0e",
        "title": "First blog post",
        "description": "This is the first blog post",
        "body": "adfadfadf",
        "createdAt": "2020-02-01T10:44:03.933Z",
        "updatedAt": "2020-02-04T11:30:25.602Z",
        "__v": 0,
        "id": "5e3556739d28fe03758b1c0e"
    },
    {
        "tags": [],
        "_id": "5e70891182f2837d262aee57",
        "title": "Third blog post",
        "description": "This is the third blog post",
        "body": "oh, so much better",
        "createdAt": "2020-03-17T08:23:45.413Z",
        "updatedAt": "2020-03-17T08:23:45.413Z",
        "__v": 0,
        "id": "5e70891182f2837d262aee57"
    },
]
```

</details>

<details><summary>GET with `filters`</summary>

We can also simply apply any Strapi API GET expression, including
[Strapi filters](https://strapi.io/documentation/3.0.0-beta.x/content-api/parameters.html#filters):

```json
 yarn get blog-posts?_limit=2
yarn run v1.22.1
$ node needle-scripts/get-api-request 'blog-posts?_limit=2'
[
    {
        "tags": [],
        "_id": "5e3556739d28fe03758b1c0e",
        "title": "First blog post",
        "description": "This is the first blog post",
        "body": "adfadfadf",
        "createdAt": "2020-02-01T10:44:03.933Z",
        "updatedAt": "2020-02-04T11:30:25.602Z",
        "__v": 0,
        "id": "5e3556739d28fe03758b1c0e"
    },
    {
        "tags": [],
        "_id": "5e70891182f2837d262aee57",
        "title": "Third blog post",
        "description": "This is the third blog post",
        "body": "oh, so much better",
        "createdAt": "2020-03-17T08:23:45.413Z",
        "updatedAt": "2020-03-17T08:23:45.413Z",
        "__v": 0,
        "id": "5e70891182f2837d262aee57"
    }
]
Done in 0.22s.
```

</details>

<details><summary>We can GET by id</summary>

```json
 yarn get blog-posts/5e70a09482f2837d262aee5e
yarn run v1.22.1
$ node needle-scripts/get-api-request blog-posts/5e70a09482f2837d262aee5e
{
    "tags": [
        {
            "_id": "5e6a74efc9e24d7fdc2bf12a",
            "tagSlug": "bitnami",
            "tagName": "bitnami",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf12b",
                "tagId": "173",
                "tagSlug": "bitnami",
                "tagName": "bitnami",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.883Z",
                "updatedAt": "2020-03-12T17:44:15.883Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf12b"
            },
            "createdAt": "2020-03-12T17:44:15.881Z",
            "updatedAt": "2020-03-12T17:44:15.887Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf12a"
        },
        {
            "_id": "5e6a74f0c9e24d7fdc2bf139",
            "tagSlug": "macvim",
            "tagName": "macvim",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74f0c9e24d7fdc2bf13a",
                "tagId": "178",
                "tagSlug": "macvim",
                "tagName": "macvim",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:16.086Z",
                "updatedAt": "2020-03-12T17:44:16.086Z",
                "__v": 0,
                "id": "5e6a74f0c9e24d7fdc2bf13a"
            },
            "createdAt": "2020-03-12T17:44:16.084Z",
            "updatedAt": "2020-03-12T17:44:16.091Z",
            "__v": 1,
            "id": "5e6a74f0c9e24d7fdc2bf139"
        },
        {
            "_id": "5e6a74efc9e24d7fdc2bf133",
            "tagSlug": "mac",
            "tagName": "mac",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf134",
                "tagId": "176",
                "tagSlug": "mac",
                "tagName": "mac",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.996Z",
                "updatedAt": "2020-03-12T17:44:15.996Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf134"
            },
            "createdAt": "2020-03-12T17:44:15.993Z",
            "updatedAt": "2020-03-12T17:44:16.003Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf133"
        }
    ],
    "_id": "5e70a09482f2837d262aee5e",
    "title": "Latest blog post DMehaffy authored",
    "description": "This is the latest blog post",
    "body": "much better",
    "createdAt": "2020-03-17T10:04:04.172Z",
    "updatedAt": "2020-03-17T10:04:04.175Z",
    "__v": 0,
    "id": "5e70a09482f2837d262aee5e"
}
Done in 0.31s.
```

</details>

<details><summary>Or, using filters again, find the same blog post by title</summary>

```json
node needle-scripts/get-api-request 'blog-posts?title=Latest blog post DMehaffy authored'
[
    {
        "tags": [
            {
                "_id": "5e6a74efc9e24d7fdc2bf12a",
                "tagSlug": "bitnami",
                "tagName": "bitnami",
                "tagDescription": "",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "legacyTag": {
                    "_id": "5e6a74efc9e24d7fdc2bf12b",
                    "tagId": "173",
                    "tagSlug": "bitnami",
                    "tagName": "bitnami",
                    "tagDescription": "",
                    "vocabId": "3",
                    "vocabSlug": "freetags",
                    "vocabName": "FreeTags",
                    "createdAt": "2020-03-12T17:44:15.883Z",
                    "updatedAt": "2020-03-12T17:44:15.883Z",
                    "__v": 0,
                    "id": "5e6a74efc9e24d7fdc2bf12b"

...

        "_id": "5e70a09482f2837d262aee5e",
        "title": "Latest blog post DMehaffy authored",
        "description": "This is the latest blog post",
        "body": "much better",
        "createdAt": "2020-03-17T10:04:04.172Z",
        "updatedAt": "2020-03-17T10:04:04.175Z",
        "__v": 0,
        "id": "5e70a09482f2837d262aee5e"
    }
]
```

</details>

</details>

</details>

### POST, GET, PUT (update)

<details><summary><strong>Click for POST, GET, PUT details</strong></summary>

First we do a POST a new blog post, then we note the `_id`, then `GET`, and
finally update with a `PUT`. Click to see details of each:

<details><summary><strong>&nbsp;&nbsp;&nbsp; 1: POST blog post</strong></summary>

```js
yarn post blog-posts
yarn run v1.22.1
$ node needle-scripts/post-api-request blog-posts
{
    "tags": [
        {
            "_id": "5e6a74efc9e24d7fdc2bf12a",
            "tagSlug": "bitnami",
            "tagName": "bitnami",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf12b",
                "tagId": "173",
                "tagSlug": "bitnami",
                "tagName": "bitnami",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.883Z",
                "updatedAt": "2020-03-12T17:44:15.883Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf12b"
            },
            "createdAt": "2020-03-12T17:44:15.881Z",
            "updatedAt": "2020-03-12T17:44:15.887Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf12a"
        },
        {
            "_id": "5e6a74efc9e24d7fdc2bf133",
            "tagSlug": "mac",
            "tagName": "mac",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf134",
                "tagId": "176",
                "tagSlug": "mac",
                "tagName": "mac",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.996Z",
                "updatedAt": "2020-03-12T17:44:15.996Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf134"
            },
            "createdAt": "2020-03-12T17:44:15.993Z",
            "updatedAt": "2020-03-12T17:44:16.003Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf133"
        }
    ],
    "_id": "5e74adc382f2837d262aee60",
    "title": "Pretty blog post",
    "description": "This is the prettiest blog post",
    "body": "much prettiester",
    "createdAt": "2020-03-20T11:49:23.436Z",
    "updatedAt": "2020-03-20T11:49:23.440Z",
    "__v": 0,
    "id": "5e74adc382f2837d262aee60"
}
Done in 0.33s.
```

</details>

<details><summary><strong>&nbsp;&nbsp;&nbsp; 2: GET blog post</strong></summary>

```js
yarn get blog-posts/5e74adc382f2837d262aee60
yarn run v1.22.1
$ node needle-scripts/get-api-request blog-posts/5e74adc382f2837d262aee60
{
    "tags": [
        {
            "_id": "5e6a74efc9e24d7fdc2bf12a",
            "tagSlug": "bitnami",
            "tagName": "bitnami",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf12b",
                "tagId": "173",
                "tagSlug": "bitnami",
                "tagName": "bitnami",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.883Z",
                "updatedAt": "2020-03-12T17:44:15.883Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf12b"
            },
            "createdAt": "2020-03-12T17:44:15.881Z",
            "updatedAt": "2020-03-12T17:44:15.887Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf12a"
        },
        {
            "_id": "5e6a74efc9e24d7fdc2bf133",
            "tagSlug": "mac",
            "tagName": "mac",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf134",
                "tagId": "176",
                "tagSlug": "mac",
                "tagName": "mac",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.996Z",
                "updatedAt": "2020-03-12T17:44:15.996Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf134"
            },
            "createdAt": "2020-03-12T17:44:15.993Z",
            "updatedAt": "2020-03-12T17:44:16.003Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf133"
        }
    ],
    "_id": "5e74adc382f2837d262aee60",
    "title": "Pretty blog post",
    "description": "This is the prettiest blog post",
    "body": "much prettiester",
    "createdAt": "2020-03-20T11:49:23.436Z",
    "updatedAt": "2020-03-20T11:49:23.440Z",
    "__v": 0,
    "id": "5e74adc382f2837d262aee60"
}
Done in 0.45s.
```

</details>

<details><summary><strong>&nbsp;&nbsp;&nbsp; 3 (first update): PUT blog post, check interactively</strong></summary>

Given this data file:

```js
cat postit/put-blog-posts.json
[
  {
    "_id": "5e74adc382f2837d262aee60",
    "title": "Pretty blog post, really",
    "description": "This is the prettiest blog post, really",
    "body": "much prettier, really",
    "tags": ["5e6a74efc9e24d7fdc2bf12a", "5e6a74efc9e24d7fdc2bf133"]
  }
]
```

We update the blog post:

```js
yarn put blog-posts
yarn run v1.22.1
$ node needle-scripts/put-api-request blog-posts
{
    "tags": [
        {
            "_id": "5e6a74efc9e24d7fdc2bf12a",
            "tagSlug": "bitnami",
            "tagName": "bitnami",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf12b",
                "tagId": "173",
                "tagSlug": "bitnami",
                "tagName": "bitnami",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.883Z",
                "updatedAt": "2020-03-12T17:44:15.883Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf12b"
            },
            "createdAt": "2020-03-12T17:44:15.881Z",
            "updatedAt": "2020-03-12T17:44:15.887Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf12a"
        },
        {
            "_id": "5e6a74efc9e24d7fdc2bf133",
            "tagSlug": "mac",
            "tagName": "mac",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf134",
                "tagId": "176",
                "tagSlug": "mac",
                "tagName": "mac",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.996Z",
                "updatedAt": "2020-03-12T17:44:15.996Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf134"
            },
            "createdAt": "2020-03-12T17:44:15.993Z",
            "updatedAt": "2020-03-12T17:44:16.003Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf133"
        }
    ],
    "_id": "5e74adc382f2837d262aee60",
    "title": "Pretty blog post, really",
    "description": "This is the prettiest blog post, really",
    "body": "much prettier, really",
    "createdAt": "2020-03-20T11:49:23.436Z",
    "updatedAt": "2020-03-20T14:00:05.440Z",
    "__v": 0,
    "id": "5e74adc382f2837d262aee60"
}
Done in 0.28s.
```

And we confirm that the change is indeed registered in the Admin UI.

</details>

<details><summary><strong>&nbsp;&nbsp;&nbsp; 3 (second update): PUT blog post, check interactively</strong></summary>

Given data file:

```js
;[
  {
    _id: '5e74adc382f2837d262aee60',
    title: 'Pretty blog post, really',
    description: 'This is the prettiest blog post, really',
    body: 'much prettier, really',
    tags: [
      {
        _id: '5e6a74efc9e24d7fdc2bf12a',
      },
      {
        _id: '5e6a74f0c9e24d7fdc2bf139',
      },
      {
        _id: '5e6a74efc9e24d7fdc2bf133',
      },
    ],
  },
]
```

We update with an additional tag:

```js
yarn put blog-posts
yarn run v1.22.1
$ node needle-scripts/put-api-request blog-posts
{
    "tags": [
        {
            "_id": "5e6a74efc9e24d7fdc2bf12a",
            "tagSlug": "bitnami",
            "tagName": "bitnami",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf12b",
                "tagId": "173",
                "tagSlug": "bitnami",
                "tagName": "bitnami",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.883Z",
                "updatedAt": "2020-03-12T17:44:15.883Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf12b"
            },
            "createdAt": "2020-03-12T17:44:15.881Z",
            "updatedAt": "2020-03-12T17:44:15.887Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf12a"
        },
        {
            "_id": "5e6a74f0c9e24d7fdc2bf139",
            "tagSlug": "macvim",
            "tagName": "macvim",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74f0c9e24d7fdc2bf13a",
                "tagId": "178",
                "tagSlug": "macvim",
                "tagName": "macvim",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:16.086Z",
                "updatedAt": "2020-03-12T17:44:16.086Z",
                "__v": 0,
                "id": "5e6a74f0c9e24d7fdc2bf13a"
            },
            "createdAt": "2020-03-12T17:44:16.084Z",
            "updatedAt": "2020-03-12T17:44:16.091Z",
            "__v": 1,
            "id": "5e6a74f0c9e24d7fdc2bf139"
        },
        {
            "_id": "5e6a74efc9e24d7fdc2bf133",
            "tagSlug": "mac",
            "tagName": "mac",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf134",
                "tagId": "176",
                "tagSlug": "mac",
                "tagName": "mac",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.996Z",
                "updatedAt": "2020-03-12T17:44:15.996Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf134"
            },
            "createdAt": "2020-03-12T17:44:15.993Z",
            "updatedAt": "2020-03-12T17:44:16.003Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf133"
        }
    ],
    "_id": "5e74adc382f2837d262aee60",
    "title": "Pretty blog post, really",
    "description": "This is the prettiest blog post, really",
    "body": "much prettier, really",
    "createdAt": "2020-03-20T11:49:23.436Z",
    "updatedAt": "2020-03-20T14:16:52.119Z",
    "__v": 0,
    "id": "5e74adc382f2837d262aee60"
}
Done in 0.47s.
```

And confirm the change in interactive Admin UI

</details>

<details><summary><strong>&nbsp;&nbsp;&nbsp; 3 (third update): PUT blog post, check interactively</strong></summary>

Given data file:

```js
cat postit/put-blog-posts.json
[
  {
    "_id": "5e74adc382f2837d262aee60",
    "title": "Pretty blog post, look ma, no tags!",
    "description": "This is the prettiest blog post, really: no tags",
    "body": "much prettier, really, without tags",
    "tags": []
  },
  {
    "_id": "5e708e5b82f2837d262aee5b",
    "title": "Fourth blog post with more tags",
    "description": "This is the fourth blog post with more tags",
    "body": "much better with more tags",
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
  },
  {
    "_id": "5e708e5b82f2837d262aee5c",
    "title": "Fifth blog post with more tags",
    "description": "This is the fifth blog post with more tags",
    "body": "oh, so much better with more tags",
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

We update multiple blog posts

```js
 yarn put blog-posts
yarn run v1.22.1
$ node needle-scripts/put-api-request blog-posts
{
    "tags": [
        {
            "_id": "5e6a74efc9e24d7fdc2bf12a",
            "tagSlug": "bitnami",
            "tagName": "bitnami",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf12b",
                "tagId": "173",
                "tagSlug": "bitnami",
                "tagName": "bitnami",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.883Z",
                "updatedAt": "2020-03-12T17:44:15.883Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf12b"
            },
            "createdAt": "2020-03-12T17:44:15.881Z",
            "updatedAt": "2020-03-12T17:44:15.887Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf12a"
        },
        {
            "_id": "5e6a74f0c9e24d7fdc2bf139",
            "tagSlug": "macvim",
            "tagName": "macvim",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74f0c9e24d7fdc2bf13a",
                "tagId": "178",
                "tagSlug": "macvim",
                "tagName": "macvim",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:16.086Z",
                "updatedAt": "2020-03-12T17:44:16.086Z",
                "__v": 0,
                "id": "5e6a74f0c9e24d7fdc2bf13a"
            },
            "createdAt": "2020-03-12T17:44:16.084Z",
            "updatedAt": "2020-03-12T17:44:16.091Z",
            "__v": 1,
            "id": "5e6a74f0c9e24d7fdc2bf139"
        },
        {
            "_id": "5e6a74efc9e24d7fdc2bf133",
            "tagSlug": "mac",
            "tagName": "mac",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf134",
                "tagId": "176",
                "tagSlug": "mac",
                "tagName": "mac",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.996Z",
                "updatedAt": "2020-03-12T17:44:15.996Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf134"
            },
            "createdAt": "2020-03-12T17:44:15.993Z",
            "updatedAt": "2020-03-12T17:44:16.003Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf133"
        }
    ],
    "_id": "5e708e5b82f2837d262aee5b",
    "title": "Fourth blog post with more tags",
    "description": "This is the fourth blog post with more tags",
    "body": "much better with more tags",
    "createdAt": "2020-03-17T08:46:19.178Z",
    "updatedAt": "2020-03-20T14:32:34.523Z",
    "__v": 0,
    "id": "5e708e5b82f2837d262aee5b"
}
{
    "tags": [
        {
            "_id": "5e6a74efc9e24d7fdc2bf12a",
            "tagSlug": "bitnami",
            "tagName": "bitnami",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf12b",
                "tagId": "173",
                "tagSlug": "bitnami",
                "tagName": "bitnami",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.883Z",
                "updatedAt": "2020-03-12T17:44:15.883Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf12b"
            },
            "createdAt": "2020-03-12T17:44:15.881Z",
            "updatedAt": "2020-03-12T17:44:15.887Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf12a"
        },
        {
            "_id": "5e6a74f0c9e24d7fdc2bf139",
            "tagSlug": "macvim",
            "tagName": "macvim",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74f0c9e24d7fdc2bf13a",
                "tagId": "178",
                "tagSlug": "macvim",
                "tagName": "macvim",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:16.086Z",
                "updatedAt": "2020-03-12T17:44:16.086Z",
                "__v": 0,
                "id": "5e6a74f0c9e24d7fdc2bf13a"
            },
            "createdAt": "2020-03-12T17:44:16.084Z",
            "updatedAt": "2020-03-12T17:44:16.091Z",
            "__v": 1,
            "id": "5e6a74f0c9e24d7fdc2bf139"
        },
        {
            "_id": "5e6a74efc9e24d7fdc2bf133",
            "tagSlug": "mac",
            "tagName": "mac",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf134",
                "tagId": "176",
                "tagSlug": "mac",
                "tagName": "mac",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.996Z",
                "updatedAt": "2020-03-12T17:44:15.996Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf134"
            },
            "createdAt": "2020-03-12T17:44:15.993Z",
            "updatedAt": "2020-03-12T17:44:16.003Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf133"
        }
    ],
    "_id": "5e708e5b82f2837d262aee5c",
    "title": "Fifth blog post with more tags",
    "description": "This is the fifth blog post with more tags",
    "body": "oh, so much better with more tags",
    "createdAt": "2020-03-17T08:46:19.256Z",
    "updatedAt": "2020-03-20T14:32:34.548Z",
    "__v": 0,
    "id": "5e708e5b82f2837d262aee5c"
}
{
    "tags": [],
    "_id": "5e74adc382f2837d262aee60",
    "title": "Pretty blog post, look ma, no tags!",
    "description": "This is the prettiest blog post, really: no tags",
    "body": "much prettier, really, without tags",
    "createdAt": "2020-03-20T11:49:23.436Z",
    "updatedAt": "2020-03-20T14:32:34.596Z",
    "__v": 0,
    "id": "5e74adc382f2837d262aee60"
}
Done in 0.31s.
```

</details>

</details>

</details>

### DELETE

<details><summary><strong>Click for POST, GET, DELETE details</strong></summary>

First we do a POST a new blog post, then we note the `_id`, then `GET`, and
finally delete with a `DELETE`. Click to see details for each step:

<details><summary><strong>&nbsp;&nbsp;&nbsp; 1: POST blog post</strong></summary>

```json
yarn post blog-posts
yarn run v1.22.1
$ node needle-scripts/post-api-request blog-posts
{
    "tags": [
        {
            "_id": "5e6a74efc9e24d7fdc2bf12a",
            "tagSlug": "bitnami",
            "tagName": "bitnami",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf12b",
                "tagId": "173",
                "tagSlug": "bitnami",
                "tagName": "bitnami",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.883Z",
                "updatedAt": "2020-03-12T17:44:15.883Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf12b"
            },
            "createdAt": "2020-03-12T17:44:15.881Z",
            "updatedAt": "2020-03-12T17:44:15.887Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf12a"
        },
        {
            "_id": "5e6a74f0c9e24d7fdc2bf139",
            "tagSlug": "macvim",
            "tagName": "macvim",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74f0c9e24d7fdc2bf13a",
                "tagId": "178",
                "tagSlug": "macvim",
                "tagName": "macvim",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:16.086Z",
                "updatedAt": "2020-03-12T17:44:16.086Z",
                "__v": 0,
                "id": "5e6a74f0c9e24d7fdc2bf13a"
            },
            "createdAt": "2020-03-12T17:44:16.084Z",
            "updatedAt": "2020-03-12T17:44:16.091Z",
            "__v": 1,
            "id": "5e6a74f0c9e24d7fdc2bf139"
        },
        {
            "_id": "5e6a74efc9e24d7fdc2bf133",
            "tagSlug": "mac",
            "tagName": "mac",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf134",
                "tagId": "176",
                "tagSlug": "mac",
                "tagName": "mac",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.996Z",
                "updatedAt": "2020-03-12T17:44:15.996Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf134"
            },
            "createdAt": "2020-03-12T17:44:15.993Z",
            "updatedAt": "2020-03-12T17:44:16.003Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf133"
        }
    ],
    "_id": "5e77654267e11a4c6492209e",
    "title": "second blog post",
    "description": "This is the second blog post",
    "body": "second in line!",
    "createdAt": "2020-03-22T13:16:50.626Z",
    "updatedAt": "2020-03-22T13:16:50.636Z",
    "__v": 0,
    "id": "5e77654267e11a4c6492209e"
}
{
  ...
}
{
  ...
    "_id": "5e77654267e11a4c6492209f",
    "title": "third blog post",
    "description": "This is the third blog post",
    "body": "third in line!",
    "createdAt": "2020-03-22T13:16:50.640Z",
    "updatedAt": "2020-03-22T13:16:50.653Z",
    "__v": 0,
    "id": "5e77654267e11a4c6492209f"
}
```

</details>

<details><summary><strong>&nbsp;&nbsp;&nbsp; 2: GET blog post</strong></summary>

```json
 yarn get blog-posts/5e77654267e11a4c6492209f
yarn run v1.22.1
$ node needle-scripts/get-api-request blog-posts/5e77654267e11a4c6492209f
{
    "tags": [
        {
            "_id": "5e6a74efc9e24d7fdc2bf12a",
            "tagSlug": "bitnami",
            "tagName": "bitnami",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf12b",
                "tagId": "173",
                "tagSlug": "bitnami",
                "tagName": "bitnami",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.883Z",
                "updatedAt": "2020-03-12T17:44:15.883Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf12b"
            },
            "createdAt": "2020-03-12T17:44:15.881Z",
            "updatedAt": "2020-03-12T17:44:15.887Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf12a"
        },
        {
            "_id": "5e6a74f0c9e24d7fdc2bf139",
            "tagSlug": "macvim",
            "tagName": "macvim",
            "tagDescription": "",
            "vocabSlug": "freetags",
...
...
        {
            "_id": "5e6a74efc9e24d7fdc2bf133",
            "tagSlug": "mac",
            "tagName": "mac",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf134",
                "tagId": "176",
                "tagSlug": "mac",
                "tagName": "mac",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.996Z",
                "updatedAt": "2020-03-12T17:44:15.996Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf134"
            },
            "createdAt": "2020-03-12T17:44:15.993Z",
            "updatedAt": "2020-03-12T17:44:16.003Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf133"
        }
    ],
    "_id": "5e77654267e11a4c6492209f",
    "title": "third blog post",
    "description": "This is the third blog post",
    "body": "third in line!",
    "createdAt": "2020-03-22T13:16:50.640Z",
    "updatedAt": "2020-03-22T13:16:50.653Z",
    "__v": 0,
    "id": "5e77654267e11a4c6492209f"
}
Done in 0.23s.
```

</details>

<details><summary><strong>&nbsp;&nbsp;&nbsp; 3: DELETE blog post</strong></summary>

Let's get the `count`, then `delete`, then get the `count` again.

```json
 yarn get blog-posts/count
yarn run v1.22.1
$ node needle-scripts/get-api-request blog-posts/count
12
Done in 0.21s.

yarn delete blog-posts/5e77654267e11a4c6492209f
yarn run v1.22.1
$ node needle-scripts/delete-api-request blog-posts/5e77654267e11a4c6492209f
the url http://example.org:9999/blog-posts/5e77654267e11a4c6492209f
the options {
  headers: {
    Authorization: 'Bearer ey..'
  }
}
{
    "tags": [
        {
            "_id": "5e6a74efc9e24d7fdc2bf12a",
            "tagSlug": "bitnami",
            "tagName": "bitnami",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf12b",
                "tagId": "173",
                "tagSlug": "bitnami",
                "tagName": "bitnami",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.883Z",
                "updatedAt": "2020-03-12T17:44:15.883Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf12b"
            },
            "createdAt": "2020-03-12T17:44:15.881Z",
            "updatedAt": "2020-03-12T17:44:15.887Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf12a"
        },
...
        {
            "_id": "5e6a74efc9e24d7fdc2bf133",
            "tagSlug": "mac",
            "tagName": "mac",
            "tagDescription": "",
            "vocabSlug": "freetags",
            "vocabName": "FreeTags",
            "legacyTag": {
                "_id": "5e6a74efc9e24d7fdc2bf134",
                "tagId": "176",
                "tagSlug": "mac",
                "tagName": "mac",
                "tagDescription": "",
                "vocabId": "3",
                "vocabSlug": "freetags",
                "vocabName": "FreeTags",
                "createdAt": "2020-03-12T17:44:15.996Z",
                "updatedAt": "2020-03-12T17:44:15.996Z",
                "__v": 0,
                "id": "5e6a74efc9e24d7fdc2bf134"
            },
            "createdAt": "2020-03-12T17:44:15.993Z",
            "updatedAt": "2020-03-12T17:44:16.003Z",
            "__v": 1,
            "id": "5e6a74efc9e24d7fdc2bf133"
        }
    ],
    "_id": "5e77654267e11a4c6492209f",
    "title": "third blog post",
    "description": "This is the third blog post",
    "body": "third in line!",
    "createdAt": "2020-03-22T13:16:50.640Z",
    "updatedAt": "2020-03-22T13:16:50.653Z",
    "__v": 0,
    "id": "5e77654267e11a4c6492209f"
}

 yarn get blog-posts/count
yarn run v1.22.1
$ node needle-scripts/get-api-request blog-posts/count
11
Done in 0.30s.

```

</details>

<details><summary><strong>&nbsp;&nbsp;&nbsp; 4: GET to Test deletion</strong></summary>

```bash
yarn get blog-posts/5e77654267e11a4c6492209f
yarn run v1.22.1
$ node needle-scripts/get-api-request blog-posts/5e77654267e11a4c6492209f
{
    "statusCode": 404,
    "error": "Not Found",
    "message": "Not Found"
}
Done in 0.21s.
```

</details>

</details>

## Node.js + Axios utility scripts

<details><summary><strong>Common usage for GET</strong></summary>

First of all, grab a JWT token based on username and password in `.env`

```json
node scripts/get-jwt.js
http://example.com:9999/auth/local
{ identifier: 'migration', password: 'headmigra11' }
200 OK
 {
  jwt: 'ey...',
  user: {
    confirmed: true,
    blocked: false,
    _id: '5e624df99285582010deb347',
    username: 'migration',
    email: 'migration@awfactory.com',
    provider: 'local',
    createdAt: '2020-03-06T13:19:53.617Z',
    updatedAt: '2020-03-06T13:19:53.626Z',
    __v: 0,
    role: {
      _id: '5e62472c9285582010deb2e5',
      name: 'Migration',
      description: 'Role for migration only',
      type: 'migration',
      createdAt: '2020-03-06T12:50:52.153Z',
      updatedAt: '2020-03-16T13:18:53.876Z',
      __v: 0,
      id: '5e62472c9285582010deb2e5'
    },
    legacyUser: null,
    avatar: null,
    id: '5e624df99285582010deb347'
  }
}
```

Then place the token in the `.env` file.

Create an `output` directory. Then run something like the following (use
quotation marks if using multiple query params):

```bash
node scripts/get-api-request.js articles?name=One | json > output/featured.txt
200 OK

node scripts/get-api-request tags?_limit=1 | json > output/atag.txt
200 OK

node scripts/get-api-request "tags?tagSlug=ajax&tagSlug=kalabox" | json > output/2tags.txt
200 OK
```

</details>

<details><summary><strong>Common usage for POST</strong></summary>

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
      legacyTag: [Object],                         // expanded during actual execution
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
      legacyTag: [Object],                         // expanded during actual execution
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
      legacyTag: [Object],                         // expanded during actual execution
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

</details>
</details>
