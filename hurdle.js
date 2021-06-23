function hurdleRace(k, height) {
    // Write your code here
    let portionRequired = 0;
    height.forEach(hurdle => {
        if (hurdle > k) {
            portionRequired += hurdle - k;
            k += hurdle - k;
        }
    });
    return portionRequired;
}
