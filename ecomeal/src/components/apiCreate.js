export function createBasket(formData) {
    return fetch('http://127.0.0.1:3000/v1/basket/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Если сервер возвращает JSON, парсим его
    })
    .then(data => {
        console.log('Успешный ответ от сервера:', data);
        // Дальнейшие действия с полученными данными
        return data; // Можно вернуть данные для последующей обработки
    })
    .catch(error => {
        console.error('Произошла ошибка при выполнении запроса:', error);
        throw error; // Передаем ошибку дальше для обработки в вызывающем коде
    });
}


export function patchBasket(formData) {
    return fetch('http://127.0.0.1:3000/v1/basket/patch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Если сервер возвращает JSON, парсим его
    })
    .then(data => {
        console.log('Успешный ответ от сервера:', data);
        // Дальнейшие действия с полученными данными
        return data; // Можно вернуть данные для последующей обработки
    })
    .catch(error => {
        console.error('Произошла ошибка при выполнении запроса:', error);
        throw error; // Передаем ошибку дальше для обработки в вызывающем коде
    });
}
