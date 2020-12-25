function loadFile(successCallback) {
    $.ajax({
        url:'PT Masjid Al-Salaam.txt',
        success: function (data){
            var arrLines = data.split("\n");
            successCallback(arrLines);
        }
      });
}

function parseFile(arrLines) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var d = new Date();
    var month = months[d.getMonth()];
    var day = d.getDate();

    if (day < 10) {
        day = "0" + day.toString();
    } else {
        day = day.toString();
    }

    var date = month + day;
    var times = arrLines.filter(element => element.includes(date))[0];
    var arrTimes = times.split(",");
    var prayerTimes = {
        "fajrAdhan": arrTimes[2],
        "fajrIqamah": arrTimes[3],
        "dhuhrAdhan": arrTimes[6],
        "dhuhrIqamah": arrTimes[7],
        "asrAdhan": arrTimes[8],
        "asrIqamah": arrTimes[9],
        "maghribAdhan": arrTimes[10],
        "ishaAdhan": arrTimes[11],
        "ishaIqamah": arrTimes[12],
        "jumuahAdhan": arrTimes[13],
        "jumuahKhutbah": arrTimes[14]
    }

    setPrayerTimes(prayerTimes); 
}

function setPrayerTimes(prayerTimes) {
    $("#fajr-adhan-time").html(prayerTimes["fajrAdhan"]);
    $("#fajr-iqamah-time").html(prayerTimes["fajrIqamah"]);
    $("#dhuhr-adhan-time").html(prayerTimes["dhuhrAdhan"]);
    $("#dhuhr-iqamah-time").html(prayerTimes["dhuhrIqamah"]);
    $("#asr-adhan-time").html(prayerTimes["asrAdhan"]);
    $("#asr-iqamah-time").html(prayerTimes["asrIqamah"]);
    $("#maghrib-adhan-time").html(prayerTimes["maghribAdhan"]);
    $("#isha-adhan-time").html(prayerTimes["ishaAdhan"]);
    $("#isha-iqamah-time").html(prayerTimes["ishaIqamah"]);
    $("#jumuah-adhan-time").html(prayerTimes["jumuahAdhan"]);
    $("#jumuah-khutbah-time").html(prayerTimes["jumuahKhutbah"]);
}

function run() {
    loadFile(parseFile);
}

window.addEventListener('load', (event) => {
    run();
});