const contactModal = document.getElementById('contact-modal');
const form = document.querySelector('.contact-form');

const message = {
    loading: 'Загрузка', //'img/form/spinner.svg', '
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
};

postData(form);

function postData(form){
    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        statusMessage.textContent = message.loading;
        form.append(statusMessage);

        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');

        request.setRequestHeader('Content-type', 'application/json');
        const formData = new FormData(form);

        const object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });

        const json = JSON.stringify(object);

        request.send(json);

        request.addEventListener('load', () =>{
            if (request.status === 200){
                //console.log(request.response);
                //statusMessage.textContent = message.success;
                showThanksModal(message.success);
                statusMessage.remove();
            } else {
                //statusMessage.textContent = message.failure;
                showThanksModal(message.failure);
                statusMessage.remove();
            }
        });
    });
}



function showThanksModal(message){
    const formModal = document.querySelector('.modal__form');
    form.classList.add('hide');
    // openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('thanks__text');
    thanksModal.innerHTML = `
        <div class="thanks__title"> ${message} </div>
    `;

    formModal.append(thanksModal);
    setTimeout(()=>{
        thanksModal.remove();
        form.classList.remove('hide');
        form.reset();
        contactModal.classList.remove('show');
        document.body.classList.remove('no-scroll');
    }, 4000);
}
