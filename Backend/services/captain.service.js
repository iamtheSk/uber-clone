const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({
  fullname,
  email,
  password,
  vehicle,
}) => {
  // Validate input fields

  console.log("Request Payload:", { fullname, email, password, vehicle });

  if (!fullname || !fullname.firstname || !email || !password || !vehicle) {
    throw new Error("All required fields must be provided.");
  }

  // Proceed with creation
  const captain = await captainModel.create({
    fullname: {
      firstname: fullname.firstname,
      lastname: fullname.lastname || "", // Provide default value if lastname is missing
    },
    email,
    password,
    vehicle: {
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    },
  });

  console.log("captain", fullname, email, password, vehicle);

  return captain;
};
