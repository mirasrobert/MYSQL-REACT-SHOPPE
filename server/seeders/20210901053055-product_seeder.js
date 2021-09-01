'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          user_id: 1,
          name: 'Airpods Wireless Bluetooth Headphones',
          image: '/images/airpods.jpg',
          brand: 'Apple',
          category: 'Electronics',
          description:
            'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',

          rating: 4.5,
          reviews_count: 12,
          price: 89.99,
          count_in_stock: 10,
        },
        {
          user_id: 1,
          name: 'iPhone 11 Pro 256GB Memory',
          image: '/images/phone.jpg',
          brand: 'Apple',
          category: 'Electronics',
          description:
            'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',

          rating: 4,
          reviews_count: 12,
          price: 70.99,
          count_in_stock: 13,
        },
        {
          user_id: 1,
          name: 'Cannon EOS 80D DSLR Camera',
          image: '/images/camera.jpg',
          brand: 'Canon',
          category: 'Electronics',
          description:
            'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',

          rating: 3,
          reviews_count: 12,
          price: 929.99,
          count_in_stock: 12,
        },
        {
          user_id: 1,
          name: 'Sony Playstation 4 Pro White Version',
          image: '/images/playstation.jpg',
          brand: 'Sony',
          category: 'Electronics',
          description:
            'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',

          rating: 5,
          reviews_count: 12,
          price: 399.99,
          count_in_stock: 11,
        },
        {
          user_id: 1,
          name: 'Logitech G-Series Gaming Mouse',
          image: '/images/mouse.jpg',
          brand: 'Logitech',
          category: 'Electronics',
          description:
            'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
          rating: 3.5,
          reviews_count: 10,
          price: 49.99,
          count_in_stock: 7,
        },
        {
          user_id: 1,
          name: 'Amazon Echo Dot 3rd Generation',
          image: '/images/alexa.jpg',
          brand: 'Amazon',
          category: 'Electronics',
          description:
            'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
          rating: 4,
          reviews_count: 12,
          price: 29.99,
          count_in_stock: 0,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};
