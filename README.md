## Homepage Utility Scripts

Node.js utility scripts to manage and test content management against Strapi
backend for the AWebFactory.com homepage migration from Drupal 6 to fullstack
Javascript.

May eventually evolve into command-line CMS cli.

Much of the migration from Drupal 6 is being managed by our own
[DurableDrupal Drush scripts](https://github.com/DurableDrupal/drush-migration-scripts),
please feel free to check out that repo also.

### Using Needle For HTTP Utils N Tests

Curiosity concerning Needle aroused very recently by
[Uploading A File To Strapi In Node.js - Drew Town Dev](https://www.drewtown.dev/post/uploading-a-file-to-strapi-in-node-js/)

Now really impressed by Needle's more than
[7 million downloads per week (npm)](https://www.npmjs.com/package/needle), and
how well it works.

I've been working with
[plain node scripts](https://github.com/awebfactory/homepage-utility-scripts/tree/plain-node-scripts)
for my HTTP requests utilities and tests up till now. Now I'm using
[Needle: The leanest and most handsome HTTP client in the Nodelands](https://github.com/tomas/needle)
for consistency.

Needle based scripts are working on all operations in these utility scripts, and
we use simple `package.json` script directives to easily execute them using
convention based data files:

<details><summary><strong>Click for GET details</strong></summary>

```
yarn get articles
[
  {
    authors: [],
    _id: '5e2853bc6fe77b5b328c484d',
    name: 'Three',
    description: 'Cras id erat posuere, efficitur nisi vel, scelerisque lectus. Pellentesque gravida facilisis velit, id sollicitudin tortor congue ac. Etiam tellus augue, varius vitae elit ut, porta aliquam arcu. Sed mattis, dui non sollicitudin gravida, est sapien cur
sus lorem, eget ultrices ex ipsum nec mauris. Suspendisse placerat massa sit amet orci consectetur dictum. Donec eu erat non ipsum volutpat molestie. Proin at diam lobortis, aliquet mauris non, interdum mi. Suspendisse id ultricies nisi. Vestibulum aliquet tincidunt nib
h rhoncus feugiat. In ipsum lorem, ultrices vitae gravida sit amet, posuere at ex. Mauris ut vestibulum leo. Sed iaculis diam eu nulla auctor fermentum eu non nunc. Donec faucibus convallis leo a vehicula. Phasellus rhoncus orci ac tellus fermentum, vitae lobortis sem i
nterdum. ',
    pubdate: '2020-01-22',
    createdAt: '2020-01-22T13:53:00.388Z',
    updatedAt: '2020-01-22T13:53:00.388Z',
    __v: 0,
    photo: null,
    id: '5e2853bc6fe77b5b328c484d'
  },
  {
    authors: [],
    _id: '5e285a3a6fe77b5b328c484e',
    name: 'Four',
    description: 'Very short description for this article number four sent in by curl',
    pubdate: '2020-01-22',
    createdAt: '2020-01-22T14:20:42.166Z',
    updatedAt: '2020-01-22T14:20:42.166Z',
    __v: 0,
    photo: null,
    id: '5e285a3a6fe77b5b328c484e'
  },
  {
    authors: [],
    _id: '5e285adc6fe77b5b328c484f',
    name: 'Five',
    description: 'Extremely, very, very short description for this second article number four sent in by curl.',
    pubdate: '2020-01-22',
    createdAt: '2020-01-22T14:23:24.828Z',
    updatedAt: '2020-01-22T15:34:22.184Z',
    __v: 0,
    photo: null,
    id: '5e285adc6fe77b5b328c484f'
  },
  {
    authors: [ [Object] ],
    _id: '5e28793a6fe77b5b328c4850',
    name: 'Two',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et gravida elit. Proin a tincidunt erat, et hendrerit elit. Proin lacinia vitae nibh vel auctor. Nunc blandit enim et pretium gravida. Sed dui lorem, convallis pharetra ligula ut, luctus lobo
rtis purus. Proin consequat eget elit et commodo. Sed mattis mauris vel nisl cursus imperdiet. Quisque id ligula in est auctor sollicitudin. Praesent sit amet sollicitudin magna, et fermentum eros. In eget fermentum lorem, vitae vestibulum nisl. Class aptent taciti soci
osqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras dapibus, nulla at cursus viverra, nisi mauris dapibus leo, vitae scelerisque risus tortor sed massa. In eleifend sodales risus, ut convallis justo rutrum vel. Orci varius natoque penatibus et magni
s dis parturient montes, nascetur ridiculus mus. Duis eros velit, tristique ut porta et, aliquam id magna. Morbi quis purus porttitor, malesuada ex vitae, finibus nisl.',
    pubdate: '2020-01-22',
    createdAt: '2020-01-22T16:32:58.755Z',
    updatedAt: '2020-01-30T16:30:24.434Z',
    __v: 0,
    photo: null,
    id: '5e28793a6fe77b5b328c4850'
  },
  {
    authors: [ [Object] ],
    _id: '5e28881c6fe77b5b328c4852',
    name: 'Springtime',
    description: 'Praesent erat ex, bibendum nec dui id, pharetra tincidunt tellus. Fusce id nisl euismod, pharetra massa a, elementum metus. Etiam vel ante cursus, faucibus metus eget, aliquet risus. Aenean faucibus risus ac magna cursus tempor vitae in elit. Vivamus sagittis ex et urna mollis elementum. Suspendisse potenti. Donec hendrerit vulputate tempor. Nunc fermentum est a mattis ultrices. Vivamus quam magna, faucibus et posuere tincidunt, sagittis sed ex. Praesent sapien erat, gravida eget scelerisque in, accumsan in velit. Curabitur id dolor elementum, fermentum nibh quis, lobortis ante. Curabitur feugiat urna justo, sit amet lobortis lorem hendrerit a. In eu iaculis odio.',
    pubdate: '2020-01-22',
    createdAt: '2020-01-22T17:36:28.950Z',
    updatedAt: '2020-01-30T16:29:59.274Z',
    __v: 0,
    photo: null,
    id: '5e28881c6fe77b5b328c4852'
  },
  {
    authors: [ [Object], [Object] ],
    _id: '5e3446966bf7252da9f7e7e1',
    name: 'Kimberly Clark news',
    description: 'one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three one two three ',
    pubdate: '2020-02-06',
    createdAt: '2020-01-31T15:24:06.392Z',
    updatedAt: '2020-02-03T13:19:36.804Z',
    __v: 0,
    photo: {
      _id: '5e3447ec5fc391438a0a086c',
      name: 'guest-room-dining-room-restaurant-inn.jpg',
      sha256: 'cW-B5c5zg36uQZZJpq_+DUkCCqO9Ejy3h-uzebmlxRg',
      hash: 'a4da6af4df604ad88f8af395b377f123',
      ext: '.jpg',
      mime: 'image/jpeg',
      size: 89.67,
      url: '/uploads/a4da6af4df604ad88f8af395b377f123.jpg',
      provider: 'local',
      related: [Array],
      createdAt: '2020-01-31T15:29:48.352Z',
      updatedAt: '2020-01-31T15:29:48.368Z',
      __v: 1,
      id: '5e3447ec5fc391438a0a086c'
    },
    id: '5e3446966bf7252da9f7e7e1'
  },
    authors: [ [Object] ],
    _id: '5e2853496fe77b5b328c484b',
    name: 'One',
    description: 'In hac habitasse platea dictumst. Nulla viverra sapien aliquam neque pulvinar, ultrices posuere ante scelerisque. Ut sit amet lacus tincidunt, finibus ipsum ut, finibus diam. Mauris luctus varius purus, ac dictum libero tristique in. Vivamus sit amet viverra dolor. Maecenas sodales sed tellus eu consequat. Ut sed ullamcorper elit. Nunc volutpat est non dapibus scelerisque. Quisque nec varius nibh. Ut euismod id orci id volutpat. In egestas augue vitae posuere ullamcorper. Quisque lobortis massa id turpis sagittis, sit amet imperdiet justo suscipit. Nam risus tortor, dapibus a fermentum nec, aliquet sed odio. Sed interdum turpis sodales eros fermentum rhoncus. Etiam iaculis libero in ultrices consequat. Praesent ut leo consectetur, pulvinar ipsum sed, accumsan quam. ',
    pubdate: '2020-01-22',
    createdAt: '2020-01-22T13:51:05.424Z',
    updatedAt: '2020-03-04T15:25:48.868Z',
    __v: 0,
    cover: [ [Object] ],
    photo: null,
    id: '5e2853496fe77b5b328c484b'
  }
]
```

or

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

<details><summary><strong>Click for PUT details</strong></summary>

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

### Common node + axios utility scripts

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
