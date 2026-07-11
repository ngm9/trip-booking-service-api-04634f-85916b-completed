const bookings = [];

function getAllBookings() {
  return bookings;
}

function addBooking(booking) {
  bookings.push(booking);
}

module.exports = {
  getAllBookings,
  addBooking,
};
