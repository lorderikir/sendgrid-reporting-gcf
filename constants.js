const SENDGRID_STATUSES = {
  PROCESSED: "processed",
  DROPPED: "dropped",
  DELIVERED: "delivered",
  DEFERRED: "deferred",
  BOUNCE: "bounce"
};

const SENDGRID_ERROR_STATUSES = [
  SENDGRID_STATUSES.BOUNCE,
  SENDGRID_STATUSES.DEFERRED
];

module.exports = { SENDGRID_STATUSES, SENDGRID_ERROR_STATUSES };
