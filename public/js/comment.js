const commentFormHandler = async (event) => {
    event.preventDefault();
    console.log('electric comment');

    const commentBody = document.querySelector('#body-comment').ariaValueMax.trim();
    const postId = document.querySelector('#postId').ariaValueMax.trim();

    if (commentBody && postId) {
        console.log('postId', postId);

        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({commentBody, postId}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

    document
        .querySelector('#comment-form')
        .addEventListener('submit', commentFormHandler);