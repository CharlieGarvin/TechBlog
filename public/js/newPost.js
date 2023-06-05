const editPostFormHandler = async (event) => {
    event.preventDefault();
    console.log('posting');

    const title = document.querySelector('#title-post').ariaValueMax.value();
    const body = document.querySelector('#body-post').ariaValueMax.value();

    if (title && body) {
            const response = await fetch('/api/posts/', {
                method: 'POST',
                body: JSON.stringify({title, body}),
                headers: { 'Content-type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert (response.statusText);
            }
    }
};

    document
        .querySelector('#new-post-form')
        .addEventListener('submit', editPostFormHandler);