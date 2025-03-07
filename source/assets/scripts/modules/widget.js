export function widget() {
const tasteButtons = document.querySelectorAll('.taste__button');
const icecreamImages = document.querySelectorAll('.widget__list-img');
const names = document.querySelectorAll('.name');

    tasteButtons.forEach((tasteButton, buttonIndex) => {
        tasteButton.addEventListener('click', () => {
            icecreamImages.forEach((taste) => {
                taste.classList.remove('widget__list-img--current');
            });
            names.forEach((name) => {
                name.classList.remove('name--current');
            });
            icecreamImages.forEach((taste, tasteIndex) => {
                if (tasteIndex === buttonIndex) {
                    taste.classList.add('widget__list-img--current');
                }
            });
            names.forEach((name, nameIndex) => {
                if (nameIndex === buttonIndex) {
                    name.classList.add('name--current');
                }
            })
        })
    });
}