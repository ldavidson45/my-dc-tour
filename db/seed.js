const Landmark = require("../models/index");

Landmark.remove({}).then(function() {
    Landmark.create({
        title: "Washington Monument",
        description: "1. James Madison had an early role in getting the monument project started. In 1833, the Washington National Monument Society, a private organization, came up with the idea for the tribute to the first President. Madison along with Supreme Court Chief Justice John Marshall started the society.",
        address: {
            street: "2 15th St NW",
            city: "Washington",
            state: "D.C.",
            zipcode: 20024
        },
        neighborhood: "National Mall"
    });
    
    Landmark.create({
        title: "Anderson House",
        description: "Anderson House was built between 1902 and 1905 as the winter residence of Larz Anderson, an American diplomat, and his wife, Isabel Weld Perkins, an author and American Red Cross volunteer. Architects Arthur Little and Herbert W.C. Browne of Boston, Massachusetts, designed the home in the Beaux-Arts style. The Andersons used the house to entertain the social and political elite of America and abroad, as well as to showcase their collection of fine art and historic artifacts that the couple acquired in their extensive travels over the forty years of their marriage",
        address: {
            street: "2118 Massachusetts Avenue, NW",
            city: "Washington",
            state: "D.C.",
            zipcode: 20008
        }
    });


})