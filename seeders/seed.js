// import necessary modules and models
const BlogPost = require('./models/blogPost');

// define starter records
const starterRecords = [
  { recordingDate: '2023-05-17', message: 'First blog post', authorId: 1 },
  { recordingDate: '2023-05-18', message: 'Second blog post', authorId: 2 },
  // add more sample data as needed
];

// insert starter records into the database
const seedDatabase = async () => {
  try {
    await BlogPost.bulkCreate(starterRecords);
    console.log('Starter records inserted successfully.');
  } catch (error) {
    console.error('Error inserting starter records:', error);
  }
};

// execute the seeding script
seedDatabase();
