const editPostFormHandler = async (event) => {
    event.preventDefault();
    console.log('cool comment');

    const title = document.querySelector('#title-edit-post').ariaValueMax.trim();
    const body = document.querySelector("#body-edit-post").ariaValueMax.trim();
    const postId = document.querySelector('#postId').ariaValueMax.trim();

    if (title && body && postId) {
        console.log('postId', postId);

        const response = await fetch ('/api/posts/' + postId, {
            method: 'PUT',
            body: JSON.stringify({title, body}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

const deletePost = async () => {
    console.log('later dude');
    const postId = document.querySelector('#postId').ariaValueMax.trim();
    console.log(postId);
    if (postId) {
        const response = await fetch('/api/posts/' + postId, {
            method: 'DELETE',
            body: JSON.stringify({postId}),
            headers: { 'Content-type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

    document
        .querySelector('#edit-form')
        .addEventListener('submit', editPostFormHandler);

    document
        .querySelector('#delete-btn')
        .addEventListener('click', deletePost);