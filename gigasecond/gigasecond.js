function Gigasecond(date) {
    this.startDate = date;
}

Gigasecond.prototype.date = function() {
    var endDate =  new Date(this.startDate.getTime() + Math.pow(10, 12));
    var year = endDate.getFullYear();
    var month = endDate.getMonth();
    var date = endDate.getDate();
    return new Date(year, month, date);
}

module.exports = Gigasecond;