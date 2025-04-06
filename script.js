const API_KEY = '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';
function askQuestion() {
    var question = document.getElementById('question').value;
    // Quasar Alpha API'ye istek göndermek için fetch kullanıyoruz
    fetch('https://api.quasaralpha.com/v1/ai', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({ prompt: question })
    })
    .then(response => response.json())
    .then(data => {
        // API'den gelen yanıtı kullanıcıya gösteriyoruz
        document.getElementById('response').innerText = data.response;
    })
    .catch(error => {
        console.error('API çağrısı başarısız oldu:', error);
        document.getElementById('response').innerText = 'Bir hata oluştu. Lütfen tekrar deneyin.';
    });
}

}
