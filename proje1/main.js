// Notu kaydetmek için işlem
document.getElementById('kaydetButon').addEventListener('click', () => {
    const notMetni = document.getElementById('notAlani').value;
    chrome.storage.local.set({ kayitliNot: notMetni }, function() {
        alert('Notunuz başarıyla kaydedildi!');
    });
});

// Sayfa yüklendiğinde kaydedilen notu al ve göster
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['kayitliNot'], function(sonuc) {
        if (sonuc.kayitliNot) {
            document.getElementById('notAlani').value = sonuc.kayitliNot;
        }
    });
});

// Notu txt dosyası olarak indir
document.getElementById('indirButon').addEventListener('click', () => {
    const notMetni = document.getElementById('notAlani').value;
    const blob = new Blob([notMetni], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'kisiel_notlarim.txt';
    a.click();
    URL.revokeObjectURL(url);
});
