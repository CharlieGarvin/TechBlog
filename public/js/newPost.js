const editPostFormHandler = async (event) => {
    event.preventDefault();
    console.log('posting');

    const title = document.querySelector('input[name="title-post"]').value;
    const body = document.querySelector('input[name="body-post"]').value;

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