// ---------- =========== English Date =========== ------------//
const urduMonths = [
    "جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون",
    "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"
];

const date = new Date();
const monthIndex = date.getMonth();
const monthName = urduMonths[monthIndex];
const day = date.getDate();
const year = date.getFullYear();

// console.log(`Date: ${day} ${monthName} ${year}`);

let english_date = document.getElementById('english_date').innerHTML = day;
let english_month = document.getElementById('english_month').innerHTML = monthName;

// ---------- =========== Islamic Date =========== ------------//
const islamicMonths = [
    "Muharram", "Safar", "Rabi' al-Awwal", "Rabi' al-Thani", "Jumada al-Ula", "Jumada al-Thani",
    "Rajab", "Sha'ban", "Ramadan", "Shawwal", "Dhu al-Qidah", "Dhu al-Hijjah"
];

const timezoneOffset = 5 * 60 * 60 * 1000; // offset in milliseconds for Pakistan Standard Time
const nowInPakistan = new Date(Date.now() + timezoneOffset);

const islamicDate = nowInPakistan.toLocaleString('en-US-u-ca-islamic', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
});

const parts = islamicDate.split(' ');
const islamicMonthName = parts[0];
const islamicDay = parseInt(parts[1]);
const islamicYear = parseInt(parts[2]);

let MonthName;
switch (islamicMonthName) {
    case "Muharram":
        MonthName = "محرم";
        break;
    case "Safar":
        MonthName = "صفر";
        break;
    case "Rabi' al-Awwal":
        MonthName = "ربيع الاوّل";
        break;
    case "Rabi' al-Thani":
        MonthName = "ربيع الثاني";
        break;
    case "Jumada al-Ula":
        MonthName = "جمادى الاول";
        break;
    case "Jumada al-Thani":
        MonthName = "جمادى الثاني";
        break;
    case "Rajab":
        MonthName = "رجب";
        break;
    case "Sha'ban":
        MonthName = "شعبان";
        break;
    case "Ramadan":
        MonthName = "رمضان";
        break;
    case "Shawwal":
        MonthName = "شوّال";
        break;
    case "Dhu al-Qidah":
        MonthName = "ذو القعدة";
        break;
    case "Dhu al-Hijjah":
        MonthName = "ذو الحجّة";
        break;
    default:
        MonthName = "شکریہ";
        break;
}

let islamic_date = document.getElementById('islamic_date').innerHTML = islamicDay;
let islamic_month = document.getElementById('islamic_month').innerHTML = MonthName;
