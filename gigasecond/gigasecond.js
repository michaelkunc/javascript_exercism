function Gigasecond(date) {
    this.startDate = date;
}

Gigasecond.prototype.date = function() {
    var endDate =  new Date(this.startDate.getTime() + 1e12);
    return new Date(endDate.setHours(0,0,0,0));
};

module.exports = Gigasecond;