function formatKSh(amount) {
  return `KSh ${amount.toLocaleString('en-KE')}`;
}

module.exports = { formatKSh };