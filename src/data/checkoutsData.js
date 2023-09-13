const _apiUrl = "api/checkouts";

export const getCheckouts = () => {
    return fetch(_apiUrl).then(r => r.json());
}

export const returnCheckout = (checkoutId) => {
    return fetch(`${_apiUrl}/${checkoutId}/return`, { method: "POST" })
}

export const checkoutMaterial = (checkOut) => {
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(checkOut)
    }
    return fetch(_apiUrl, options);
}

export const getOverdueCheckouts = () => {
    return fetch(`/${_apiUrl}/overdue`).then(r => r.json());
}