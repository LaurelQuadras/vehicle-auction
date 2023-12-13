const { db } = require('@vercel/postgres');
const { offers } = require('../app/lib/placeholder-data.js');

async function seedOffers(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS offers (
        id INT NOT NULL PRIMARY KEY,
        image_url VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        distance INT NOT NULL,
        offer_name VARCHAR(255) NOT NULL,
        power INT NOT NULL,
        odometer INT NOT NULL,
        type VARCHAR(255) NOT NULL,
        repair_estimate INT NOT NULL,
        replacement_value INT NOT NULL,
        bidvalue INT NOT NULL
      );
    `;

    console.log(`Created "offers" table`);

    const insertedOffers = await Promise.all(
      offers.map(
        (offer) => client.sql`
        INSERT INTO offers (id, image_url, location, distance, offer_name, power, odometer, type, repair_estimate, replacement_value, bidvalue)
        VALUES (${offer.id}, ${offer.image_url}, ${offer.location}, ${offer.distance}, ${offer.offer_name}, ${offer.power}, ${offer.odometer}, ${offer.type}, ${offer.repair_estimate}, ${offer.replacement_value}, ${offer.bidvalue})
        ON CONFLICT (id) DO NOTHING;
      `)
    );

    console.log(`Seeded ${insertedOffers.length} customers`);

    return {
      createTable,
      offers: insertedOffers,
    };

  } catch (error) {
    console.error('Error seeding offers:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedOffers(client);
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});