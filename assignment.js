// https://github.com/WreetSarker/assignment-3

function kilometerToMeter(km) {
    // checking for invalid input
    if (km < 0 || (typeof km !== 'number')) {
        return "Kilometer is invalid!";
    }
    const meter = km * 1000;
    return meter;
}

function budgetCalculator(watch, phone, laptop) {
    //checking for invalid input
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Values can't be negative!";
    }
    const total = watch * 50 + phone * 100 + laptop * 500;
    return total;
}

function hotelCost(days) {
    //checking for invalid input
    if (days < 0 || (typeof days !== 'number')) {
        return "Days can't be invalid!";
    }

    let cost;
    if (days <= 10) {
        cost = days * 100;
    } else if (days <= 20) {
        cost = 10 * 100 + (days - 10) * 80;
    } else {
        cost = 10 * 100 + 10 * 80 + (days - 20) * 50;
    }
    return cost;
}

function megaFriend(arr) {
    //checking for invalid input
    if (arr.length === 0) {
        return "Array shouldn't be empty!";
    }

    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max.length) {
            max = arr[i];
        }
    }
    return max;
}
