const numValues = document.querySelectorAll(".num");
const interval = 4000;
const scan = document.querySelector(".scan");
const pdf = document.querySelector(".pdf");
const entry = document.querySelector(".entry");
const print = document.querySelector(".print");

// Fetching the data from API and calling the number animation with them
const getData = async() => {
    try {
        const fetchData = await fetch("./data.json");
        const data = await fetchData.json();
        numberAnimation(scan, data["Scan"]);
        numberAnimation(pdf, data["Pdf"]);
        numberAnimation(entry, data["Entry"]);
        numberAnimation(print, data["Print"]);
    } catch(err) {
        console.log(err);
    }
}

// Number Counter Animation Function
const numberAnimation = (elem, val) => {
    let startValue = 0;
    let duration = Math.floor(interval / val);
    console.log(duration);
    let counter = setInterval(() => {
        startValue += 1;
        elem.textContent = startValue;
        if(startValue === val) {
            clearInterval(counter);
        }
    }, duration);
}

getData();