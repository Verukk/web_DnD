document.addEventListener('DOMContentLoaded', () => {
    const commentsContainer = document.getElementById('comments-container');
    const preloader = document.getElementById('preloader');


    fetchComments();

    function fetchComments() {
        console.log('Использую фиктивные данные для тестирования...');

        const mockComments = [
            {
                name: 'Люблю',
                email: 'geralt@witcher.com',
                body: 'Прекрасный мир, но у него есть недостатки.'
            },
            {
                name: 'API',
                email: 'ciri@witcher.com',
                body: 'Кажется, мы можем что-то улучшить!'
            },
            {
                name: 'Которые',
                email: 'please@witcher.com',
                body: 'Великолепный дизайн, мне нравится!'
            },
            {
                name: 'Не',
                email: 'help@poet.com',
                body: 'Стихами эту красоту не описать.'
            },
            {
                name: 'Работают',
                email: 'killme@witcher.com',
                body: 'Давайте добавим магии в этот проект!'
            }
        ];

        preloader.style.display = 'none';

        renderComments(mockComments);
    }

    function renderComments(comments) {
        comments.forEach(comment => {
            const commentEl = document.createElement('div');
            commentEl.classList.add('comment');

            commentEl.innerHTML =
            `<h4>${comment.name} (${comment.email})</h4>
                <p>${comment.body}</p>`
            ;

            commentsContainer.appendChild(commentEl);
        });
    }

    function showError(message) {
        const errorEl = document.createElement('div');
        errorEl.classList.add('error');
        errorEl.textContent = `⚠️ Something went wrong: ${message}`;
        commentsContainer.appendChild(errorEl);
    }
});