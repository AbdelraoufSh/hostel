const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');



// Enable CORS for all origins
app.use(cors());
// Serve images from the 'uploads' folder
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
// Endpoint to retrieve the list of image filenames
app.get('/api/images', (req, res) => {
  const fs = require('fs');
  const uploadDir = path.join(__dirname, 'uploads');

  // Read the contents of the 'uploads' folder
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading the uploads directory' });
    }
    // Filter out non-image files if needed (e.g., you can check file extensions)
    const imageFiles = files.filter(file => {
      return file.match(/\.(jpg|jpeg|png|gif)$/i); // Example for image extensions
    });

    // Return the list of image URLs
    const imageUrls = imageFiles.map(file => `/api/uploads/${file}`);
    res.json(imageUrls);
  });
});
app.get('/api/hello', async (req, res) => {
    try {
      // Fetch a random cat image from The Cat API
  
      // Return the JSON response with the messages and the cat image URL
      res.json({
        logo:'Hostel',
        header:['Home','About','Rooms','Services','Contact'],
        home:['Luxury Hostel','Luxury family hostel where you can relax and ‌enjoy the beautiful nature and beautiful views.'],
        about:['At the base of the mountain','5 minutes to the station, 15 minutes to the landmarks, and 20 minutes to the city center and shopping.','Our hostel is located near the mountain, a few minutes walk from the station and near the center. Extremely preferred place for recreation in the fresh air. Our location is very suitable for people who want to enjoy the mountain attractions in the area.','‌  We have a small seed restaurant, spa and excellent accommodation. Near our hostel there is a famous local café with traditional rolls for the region.‌','Book a room'],
        service:['Services','We have everything you need for a comfortable stay: our modern kitchen is pretty big for you and your friends, 24 hours reception, free wi-fi and PC available, free city maps, magazines, bike rent. There is a bathroom in every room, where you`ll find a hairdryer and fresh towels.']
        ,room:['Pricing','Backpackers Hostel provides an accommodation for every kind of demand.There are rooms for families and bunks for single travellers.'],
        price:['$125','150$'],
        desc:['Mall room for two. Big bed in the room, TV, Wi-fi, big wardrobe, air conditioning, and a safe','Mall room for two. Big bed in the room, TV, Wi-fi, big wardrobe, air conditioning, and a safe'],
        other:['Our clients love us','Luxury Hostel – the best base for an adventurous city explorer','How to check in?','‌‌‌Please find out our payment conditions and choose your way to book the apartment. Methods of payment: Cash, Credit Card, Online payment method and Cheque via pre clearance only (with receipt required a minimum of 7 days prior to the date of your arrival).','Learn More','Hostel rules','We have some simple rules to make our your stay as comfortable as possible','At Backpackers hostel we try and keep things fun and friendly. However, we are not a "party place" and we ask all guests to be quiet in the bedroom and hall areas after 23:00. We also expect all guests to be considerate and respectful to one another and to hostel staff and to comply with the hostel rules.','You must check in at your destination hostel(s) before 18:00 (6PM) local time. If you are unable to do this, you must contact the hostel(s) directly before 18:00 (6PM) local time to confirm a later arrival time. Failure to do this may result in your booking being cancelled.','Request a Reservation','Like rock stars, asteroids have been given their fair share of urban myth and lore. Many have attributed the extinction of the dinosaurs','to the impact of a huge asteroid on the earth.'],
        opinion:['Great place to relax. Access to the mountain is literally a minute away. The food is great as well as the atmosphere. Accommodation is easy, Natalia is a great host and will make you feel special with your little surprises. We recommend it.','A very friendly place to spend holidays with friends and family. High quality service and chill atmosphere','I arrived with a big company of my friends for the weekend. So we has a great time! This is a place where you cna meet new interesting people every day.']
        ,clients:['Nathan Demark','Dilan Dannis','Amanda Nunes'],
        contact:['Contact Us','We’re here to help and answer any question you might have.','' ],
        footer:['Hostel','If you are getting to us by bus or train, you should get to the Main square and go down the street to the south. You will see an old white building with a big billboard on it. This is it! ','Home','About','Rooms','Services','Contact','Phone','123-456-7890','Email','mail@yourcompany.com','Social','California','21 Lebsack Harbor Apt. 276 Palo Alto, CA','New York','74 Howell Islands Suite 834 Rochester, NY','© All Rights Reserved.']
      });  
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch cat image!' });
    }
  });
  module.exports = (req, res) => {
    // Use the Express app to handle requests
    app(req, res);
  };
