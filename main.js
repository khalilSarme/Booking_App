AOS.init();

function toggleButton() {
    const checkboxes = document.querySelectorAll('.booking_box input[type=checkbox]');
    const button = document.querySelector('.next_btn');
    const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    button.disabled = !isChecked;
}

const checkboxes = document.querySelectorAll('.booking_box input[type=checkbox]');

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', toggleButton);
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            checkbox.parentNode.setAttribute('style', 'background-color: #0080af');
            checkbox.parentNode.childNodes[1].setAttribute('style', 'color: #FFFFFF')

        } else {
            checkbox.parentNode.setAttribute('style', 'background-color: transparent');
            checkbox.parentNode.childNodes[1].setAttribute('style', 'color: #0F0F0F')
        }
    });
});

document.querySelector('.book_btn').addEventListener('click', function() {
    document.querySelector('.wrapper').setAttribute('style',
        'display: none');
    setTimeout(function() {
        document.querySelector('.booking_box').setAttribute('style', 'display: flex');
    },
        1500);
});

document.querySelector('.cancel_btn').addEventListener('click', function() {
    document.querySelector('.booking_box').setAttribute('style',
        'display: none');
    setTimeout(function() {
        document.querySelector('.wrapper').setAttribute('style', 'display: flex');
    },
        1500);
    checkboxes.forEach(e=>e.checked = false);
    document.querySelector(".booking_box .option").setAttribute('style',
        'background-color: transparent');
    document.querySelector(".booking_box .option label").setAttribute('style',
        'color: #0f0f0f');
});

let nextStep = document.querySelector('.booking_box .next_btn');

nextStep.addEventListener('click', function() {
    let order = {
        options: Array.from(checkboxes).filter(e => e.checked == true)
    }
    console.log(order.options)
});



























