const API_KEY = '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';
function askQuestion() {
    var question = document.getElementById('question').value;
    // Quasar Alpha API'ye istek göndermek için fetch kullanıyoruz
    fetch('https://openrouter.ai/api/v1/chat/completions, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: question }]
})
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
