//Part 1

for (let i = 1000; i >= 0; i -= 2) {
    console.log(i)
}

/////////////////////////////////////////////////////////////////////////////////
//Part 2

for (let i = 0; i <= 10000; i++) {
    if (i === 2500){
        alert("A quarter of the way there!")
    }
    if (i === 5000){
        alert("Halfway there!")
    }
    if (i === 10000){
        alert("The loop is done!")
    }
}

/////////////////////////////////////////////////////////////////////////////////
//Part 3

let topShows;

topShows = ["Bingus TV", "Spongebob", "Number 3", "TV Static", "Spongebob 2"];
showAmount = topShows.length;


for (let i = 0; i < showAmount; i++) {
    alert("My #" + (i + 1) + " favorite tv show is " + topShows[i])
}