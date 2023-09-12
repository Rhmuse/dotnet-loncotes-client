const _apiUrl = "api/checkouts";

export const getCheckouts = () => {
    return fetch(_apiUrl).then(r => r.json());
}