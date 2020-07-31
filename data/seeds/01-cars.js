exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "2C3KA73WX6H237747",
          make: "Ford",
          model: "Explorer",
          mileage: 11003,
          automatic: true,
          title: "clean"
        },
        {
          vin: "1G1JC1243T7246823",
          make: "Toyota",
          model: "Corolla",
          mileage: 35755,
          automatic: true,
          title: "clean"
        },
        {
          vin: "JHMBB2269NC026648",
          make: "Ford",
          model: "Expedition",
          mileage: 220513,
          automatic: true,
          title: "salvage"
        },
        {
          vin: "JH4CC2560RC008414",
          make: "Mazda",
          model: "Miata",
          mileage: 23901,
          automatic: false,
          title: "clean"
        },
        {
          vin: "5B4LP57G323345457",
          make: "Nissan",
          model: "Pathfinder",
          mileage: 75000,
          automatic: true,
          title: "clean"
        },
        {
          vin: "SAJWA2GEXBMV00832",
          make: "Nissan",
          model: "370X",
          mileage: 10760,
          automatic: false,
          title: "clean"
        }
      ]);
    });
};
