function Gigasecond(date) {
    this.startDate = date;
}

Gigasecond.prototype.date = function() {
    var endDate =  new Date(this.startDate.getTime() + Math.pow(10, 12));
    return new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
}

module.exports = Gigasecond;