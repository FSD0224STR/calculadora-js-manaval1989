const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click',() => {
    const pushedButton = button.textContent;

    if (button.id === 'reset') {
        screen.textContent = '0'
        return;
    }

    if (button.id === 'delete') {
        if (screen.textContent.length === 1 || screen.textContent === 'Syntax Error!') {
            screen.textContent = '0';
        } else {
        screen.textContent = screen.textContent.slice(0, -1);
        }
        return;
    }

    if (button.id === 'equal') {
       try { 
        screen.textContent = eval(screen.textContent);
       } catch {
        screen.textContent = 'Syntax Error!'
       }
        return
    }

    if (screen.textContent === '0' || screen.textContent === 'Syntax Error!') {
        screen.textContent = pushedButton
    } else {
        screen.textContent += pushedButton
    }
});
})