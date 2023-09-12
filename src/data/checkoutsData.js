const _apiUrl = "api/checkouts";

export const getCheckouts = () => {
    return fetch(_apiUrl).then(r => r.json());
}

export const returnCheckout = (checkoutId) => {
    return fetch(`${_apiUrl}/${checkoutId}/return`, { method: "POST" })
}