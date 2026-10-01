function evaluateBatchStatus(batch, currentDate) {
    if (batch.currentQuantity === 0) {
        return "SOLD_OUT";
    } else if (currentDate > batch.expiryDate) {
        return "EXPIRED";
    } else if ((batch.expiryDate - currentDate) <= 15) {
        return "NEAR_EXPIRY";
    }
    return "ON_SHELF";
}
module.exports = { evaluateBatchStatus };
