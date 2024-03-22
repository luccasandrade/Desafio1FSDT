const url = 'https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact'

const name1 = document.querySelector('.nome1')
const name2 = document.querySelector('.nome2')
const name3 = document.querySelector('.nome3')
const name4 = document.querySelector('.nome4')
const name5 = document.querySelector('.nome5')
const historia = document.querySelector('.historia')

const button = document.querySelector('button')
button.onclick = sendData

async function sendData(event) {
    event.preventDefault();

    const data = {
        names: [name1.value, name2.value, name3.value, name4.value, name5.value],
        message: historia.value
    }

    console.log(data)

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Não foi possível enviar os dados para a API');
        }

        alert('Dados enviados com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar os dados para a API:', error);
    }
}