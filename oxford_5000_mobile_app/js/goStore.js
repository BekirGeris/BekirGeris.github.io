document.getElementById("download-app1").addEventListener("click", function (event) {
    event.preventDefault(); // Varsayılan bağlantı davranışını engeller

    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // iPhone kontrolü
    if (/iPhone/i.test(userAgent)) {
        window.location.href = "https://apps.apple.com/app/id6479473338"; // iPhone için yönlendirme
    }
    // Android kontrolü
    else if (/android/i.test(userAgent)) {
        window.location.href = "https://play.google.com/store/apps/details?id=com.begers.fitnessapp"; // Android için yönlendirme
    }
    // Mobil cihaz değilse
    else {
        window.location.href = "#download"; // Mobil cihaz değilse indirme bölümüne yönlendirme
    }
});
