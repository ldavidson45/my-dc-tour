const Landmark = require("../models/Landmark");

Landmark.remove({}).then(function() {
    Landmark.create({
        title: "Washington Monument",
        description: "1. James Madison had an early role in getting the monument project started. In 1833, the Washington National Monument Society, a private organization, came up with the idea for the tribute to the first President. Madison along with Supreme Court Chief Justice John Marshall started the society.",
        address: {
            street: "2 15th St NW",
            city: "Washington",
            state: "D.C.",
            zipcode: 20024,
            lat: 38.889484,
            lng: -77.035278
        },
        neighborhood: "National Mall"
    });

    Landmark.create({
        title: "Larz Anderson House",
        description: "Anderson House was built between 1902 and 1905 as the winter residence of Larz Anderson, an American diplomat, and his wife, Isabel Weld Perkins, an author and American Red Cross volunteer. Architects Arthur Little and Herbert W.C. Browne of Boston, Massachusetts, designed the home in the Beaux-Arts style. The Andersons used the house to entertain the social and political elite of America and abroad, as well as to showcase their collection of fine art and historic artifacts that the couple acquired in their extensive travels over the forty years of their marriage",
        address: {
            street: "2118 Massachusetts Avenue, NW",
            city: "Washington",
            state: "D.C.",
            zipcode: 20008,
            lat: 42.31055 ,
            lng: -71.13482
        }
    });

    Landmark.create({
        title: "Franklin Delano Roosevelt Memorial",
        description: "In honor of President Franklin Delano Roosevelt's four terms in office, the memorial is divided into four outdoor rooms where statues and murals stand to represent issues from the Great Depression to World War II. When visiting the FDR memorial, visitors have the opportunity to learn about and reflect on some of the most significant events in this country's history while enjoying some of the best views of the Tidal Basin and iconic cherry blossom trees that surround it.",
        address: {
            street: "1850 West Basin Dr SW",
            city: "Washington",
            state: "D.C.",
            zipcode: 20008,
            lat: 38.883475,
            lng: -77.042954
        }
    });

    Landmark.create({
        title: "Vietnam Women's Memorial",
        description: "The Vietnam Women's Memorial is a memorial dedicated to the women of the United States who served in the Vietnam War, most of whom were nurses. It serves as a reminder of the importance of women in the conflict. It depicts three uniformed women with a wounded soldier. Wikipedia",
        address: {
            street: "5 Henry Bacon Dr SW",
            city: "Washington",
            state: "D.C.",
            zipcode: 20008,
            lat: 38.890590,
            lng: -77.047001
        }
    });

})