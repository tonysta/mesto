export default class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }
    getProfileInfo() {
        return fetch(`${this._url}users/me`, {
            method: 'GET',
            headers: this._headers
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);
        })
    }
    getCards() {
        return fetch(`${this._url}cards`, {
            method: 'GET',
            headers: this._headers
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);
        })
    }
    patchProfile(data) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.profession
            })
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);
        })
    }
}