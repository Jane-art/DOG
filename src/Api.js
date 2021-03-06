const responseHandler = res => {
    // console.log(res);
    return res.ok ? res.json() : res.statusText;
}

class Api {
    constructor({path,token}) {
        this.path=path;
        this.token=token;
    }
    getProductList() {
        return fetch(`${this.path}/products`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        }).then(responseHandler);  //путь и набор параметров
    }

    getSingleProduct(id) {
        return fetch(`${this.path}/products/${id}`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        }).then(responseHandler);  //путь и набор параметров
    }
}

const config = {
    path: "https://api.react-learning.ru",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac"
} // файл для конфигурации с сервером, можно поменять запросы и токен для своего проекта
const api = new Api(config);

export default api;