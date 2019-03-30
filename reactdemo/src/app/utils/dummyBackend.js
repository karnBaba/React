export function configureFakeBackend() {
    let user = JSON.parse(localStorage.getItem('user')) || [];
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            console.log('opts', opts);
            setTimeout(() => {
                 if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
    
                    let params = JSON.parse(opts.body);
                    user = {'username': 'hruday@gmail.com', 'password': 'hruday123'};
                    if (user.username === params.username && user.password === params.password) {
                        // if login details are valid return user details and fake jwt token
                        let responseJson = {
                            username: user.username,
                            token: 'fake-jwt-token'
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('Username or password is incorrect');
                    }

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}