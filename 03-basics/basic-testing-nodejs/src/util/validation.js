function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error("Invalid input - must not be empty.");
  }
}

// js 에서 isNaN("1")은 false다.
function validateNumber(number) {
  if (isNaN(number) || typeof number !== "number") {
    throw new Error("Invalid number input.");
  }
}

exports.validateNumber = validateNumber;
exports.validateStringNotEmpty = validateStringNotEmpty;
