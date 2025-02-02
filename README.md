<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Axios & Fetch API</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
        }
        hr {
            margin: 20px 0;
        }
        .top-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px 15px;
            background: #007BFF;
            color: #fff;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Axios : GET, POST, PUT, DELETE</h1>
    
    <h2>Getting Started with Axios</h2>
    <p><a href="https://axios-http.com/docs/intro" target="_blank">Axios HTTP Docs</a></p>
    
    <h3>Installing</h3>
    <h4>Using jsDelivr CDN:</h4>
    <pre><code>&lt;script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"&gt;&lt;/script&gt;</code></pre>
    
    <h4>Using unpkg CDN:</h4>
    <pre><code>&lt;script src="https://unpkg.com/axios/dist/axios.min.js"&gt;&lt;/script&gt;</code></pre>
    
    <h3>JSONPlaceholder API</h3>
    <p>JSONPlaceholder comes with a set of 6 common resources:</p>
    <ul>
        <li>/posts - 100 posts</li>
        <li>/comments - 500 comments</li>
        <li>/albums - 100 albums</li>
        <li>/photos - 5000 photos</li>
        <li>/todos - 200 todos</li>
        <li>/users - 10 users</li>
    </ul>
    
    <hr>
    
    <h1>The Fetch API</h1>
    <pre><code>
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
    </code></pre>
    
    <p><strong>And this is the power of promise chaining again.</strong></p>
    <p>Now inside here we can actually take the data:</p>
    <pre><code>
    .then(data => { console.log(data); })
    </code></pre>
    <p>That we get back from the JSON method, so this returns to us a promise which, when resolved, gives us the data that we need.</p>
    
    <hr>
    
    <button class="top-btn" onclick="scrollToTop()">Go to Top</button>
    
    <script>
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    </script>
</body>
</html>
