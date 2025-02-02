# Axios : GET, POST, PUT, DELETE

## Getting Started with Axios

[Axios HTTP Docs](https://axios-http.com/docs/intro)

### Installing

#### Using jsDelivr CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

#### Using unpkg CDN:
```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

## JSONPlaceholder API
JSONPlaceholder comes with a set of 6 common resources:

| Endpoint    | Description  |
|------------|-------------|
| `/posts`   | 100 posts    |
| `/comments`| 500 comments |
| `/albums`  | 100 albums   |
| `/photos`  | 5000 photos  |
| `/todos`   | 200 todos    |
| `/users`   | 10 users     |

---

# The Fetch API
```js
fetch('info/frukt.json')
    .then((response) => {
        console.log('resolved', response);
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch((err) => {
        console.log('rejected', err);
    });
```

> And this is the power of promise chaining again.
>
> Now inside here we can actually take the data:
>
> ```js
> .then(data => { console.log(data); })
> ```
>
> That we get back from the JSON method, so this returns to us a promise which, when resolved, gives us the data that we need.

---

[Go to Top](#axios--get-post-put-delete)
