
export const UseBurger = () => {
    const burger = document.getElementsByClassName('burger')[0];
    const list = document.getElementsByClassName('nav_list-active')[0];

    burger.addEventListener('click', () => {
        // Убираем точку перед именем класса
        burger.classList.toggle('burger-active');
        list.classList.toggle('nav_list-active-oppened'); // Если вы хотите также управлять списком навигации
    });
}