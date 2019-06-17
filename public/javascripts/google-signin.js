function renderButton() {
    gapi.signin2.render('signin-button', {
        'scope': 'profile email',
        'width': 240,
        'height': 100,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    });
}
