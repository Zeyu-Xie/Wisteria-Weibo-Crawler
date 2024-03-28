const axios = require("axios");

const url = "https://weibo.com";
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_access_token',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
};

axios.get(url, {
    headers: headers
}).then(res => {
    console.log(res.data);
}).catch(err => {
    console.error(err);
})