function askQuestion() {
    var question = document.getElementById('question').value;
    // Quasar Alpha API entegrasyonu burada olacak
    // Simülasyon için sabit bir yanıt döndürelim
    var response = "Bu, Quasar Alpha API'den gelen bir yanıttır.";
    document.getElementById('response').innerText = response;
}
