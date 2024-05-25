export const createInput = () => {
    const app = document.createElement('div');
    document.body.appendChild(app);

    const input = document.createElement('input');
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Здесь будет текст';

    app.appendChild(input);
    app.appendChild(paragraph);

    let timeout;

    input.addEventListener('input', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            paragraph.textContent = input.value;
        }, 300);
    });
}