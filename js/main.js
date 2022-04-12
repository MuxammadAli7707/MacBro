// const macObject = [
//   {
//     id:1,
//     title: 'MacBook Air 13-inch',
//     color: 'gold',
//     ram: {
//      GB8:[{
//        memory:'256GB',
//        price: 12497000
//      },
//      {
//       memory:'512GB',
//       price: 15066000
//     }],
//      GB16: [{
//       memory:'256GB',
//       price: 16935000
//     },
//     {
//      memory:'512GB',
//      price: 19270500
//    },
//    {
//     memory:'1TB',
//     price: 20438500
//   }]
//     },
//     imgs: [
//       '../imgs/mac-gold-face.webp',
//       '../imgs/mac-gold-key.webp',
//       '../imgs/mac-gold-command.webp',
//       '../imgs/mac-gold-left.webp',
//       '../imgs/mac-gold-book.webp',
//     ],
//   },
//   {
//     id:2,
//     title: 'MacBook Air 13-inch',
//     color: 'silver',
//     ram: {
//      GB8:[{
//        memory:'256GB',
//        price: 12497000
//      },
//      {
//       memory:'512GB',
//       price: 15066000
//     }],
//      GB16: [{
//       memory:'256GB',
//       price: 16935000
//     },
//     {
//      memory:'512GB',
//      price: 19270500
//    },
//    {
//     memory:'1TB',
//     price: 21606500
//   }]
//     },
//     imgs: [
//       '../imgs/mac-gold-face.webp',
//       '../imgs/mac-gold-key.webp',
//       '../imgs/mac-gold-command.webp',
//       '../imgs/mac-gold-left.webp',
//       '../imgs/mac-gold-book.webp',
//     ]
//   },
//   {
//     id:3,
//     title: 'MacBook Air 13-inch',
//     color: 'space grey',
//     ram: {
//      GB8:[{
//        memory:'256GB',
//        price: 12497000
//      },
//      {
//       memory:'512GB',
//       price: 15066000
//     }],
//      GB16: [{
//       memory:'256GB',
//       price: 16935000
//     },
//     {
//      memory:'512GB',
//      price: 19270500
//    },
//    {
//     memory:'1TB',
//     price: 21606500
//   }]
//     },
//     imgs: [
//       '../imgs/mac-gold-face.webp',
//       '../imgs/mac-gold-key.webp',
//       '../imgs/mac-gold-command.webp',
//       '../imgs/mac-gold-left.webp',
//       '../imgs/mac-gold-book.webp',
//     ]
//   }
// ];


const macObject = [
  {
    id: 1,
    title: "MacBook Air 13-inch",
    ram: 8,
    mem: [
      {
        memory: "256 ",
        price: "12 497 000 so'm",
        // skidca: 14621000,
      },
      {
        memory: "512 ",
        price: "19 270 500 so'm",
        // skidca: 17627500,
      },
      
    ],

    color: ["Gold", "Silver", "Space Gray"],

    imgGold: [
      "https://cdn.macbro.uz/macbro/94afd179-46f3-49df-aaa5-de83d8210be1",
      "https://cdn.macbro.uz/macbro/b8166836-a68f-4886-bf74-04d2ae1e38da",
      "https://cdn.macbro.uz/macbro/dfd7cc8c-8f26-430c-ba64-7820b90d4df1",
      "https://cdn.macbro.uz/macbro/355da324-69f8-41d0-a143-605d8e470bad",
      "https://cdn.macbro.uz/macbro/2aa0ef46-60b7-469c-8eea-11d8bf09d9f3",
    ],

    gold: [
      "https://cdn.macbro.uz/macbro/003a584a-0d7d-4123-9f03-b3386914c6c2",

      "https://cdn.macbro.uz/macbro/b8166836-a68f-4886-bf74-04d2ae1e38da",

      "https://cdn.macbro.uz/macbro/dfd7cc8c-8f26-430c-ba64-7820b90d4df1",

      "https://cdn.macbro.uz/macbro/355da324-69f8-41d0-a143-605d8e470bad",

      "https://cdn.macbro.uz/macbro/4a2be20b-558e-4dda-852e-413b23b153e3",
    ],

    imgSilver: [
      "https://cdn.macbro.uz/macbro/cf510327-b4e8-4378-a001-cbd8779504b8",
      "https://cdn.macbro.uz/macbro/67762a5d-aa1e-4d3c-b3cd-fda8b50b937f",
      "https://cdn.macbro.uz/macbro/51b73a16-4170-4944-80cf-6f8bca51351e",
      "https://cdn.macbro.uz/macbro/e622b5e0-65fc-4e91-a70d-9025fc30fd58",
      "https://cdn.macbro.uz/macbro/d90e01d1-2087-48a3-9462-912f58ea138c",
    ],
      

    silver: [
      "https://cdn.macbro.uz/macbro/cf510327-b4e8-4378-a001-cbd8779504b8",

      "https://cdn.macbro.uz/macbro/67762a5d-aa1e-4d3c-b3cd-fda8b50b937f",

      "https://cdn.macbro.uz/macbro/51b73a16-4170-4944-80cf-6f8bca51351e",

      "https://cdn.macbro.uz/macbro/e622b5e0-65fc-4e91-a70d-9025fc30fd58",

      "https://cdn.macbro.uz/macbro/d90e01d1-2087-48a3-9462-912f58ea138c",
    ],

    imgGray: [
      "https://cdn.macbro.uz/macbro/edb6411f-3f34-47b1-a118-36045811f045",
      "https://cdn.macbro.uz/macbro/7f956a88-c90a-44b4-ba40-50aac4807181",
      "https://cdn.macbro.uz/macbro/dfda6000-e242-4442-ad59-bac513806275",
      "https://cdn.macbro.uz/macbro/eb6d4a3e-b892-4c4f-aff6-46d333c494ae",
      "https://cdn.macbro.uz/macbro/66715875-b08c-45a0-9f79-5f4a222e5943",
    
    ],

    SpaceGray: [
      "https://cdn.macbro.uz/macbro/edb6411f-3f34-47b1-a118-36045811f045",

      "https://cdn.macbro.uz/macbro/7f956a88-c90a-44b4-ba40-50aac4807181",

      "https://cdn.macbro.uz/macbro/dfda6000-e242-4442-ad59-bac513806275",

      "https://cdn.macbro.uz/macbro/eb6d4a3e-b892-4c4f-aff6-46d333c494ae",

      "https://cdn.macbro.uz/macbro/66715875-b08c-45a0-9f79-5f4a222e5943",
    ],
  },
  {
    id: 2,
    title: "MacBook Air 13-inch",
    ram: 16,
    mem: [
      {
        memory: "256GB",
        price: "16 935 000 so'm",
        // skidca: 19813500,
      },
      {
        memory: "512GB",
        price: "19270500 so'm",
        // skidca: 22546500,
      },
      {
        memory: "1tb ",
        price: "20 438 500 so'm",
        // skidca: 23913000,
      },
    ],

    imgGold: "https://cdn.macbro.uz/macbro/94afd179-46f3-49df-aaa5-de83d8210be1",      
    // gold: [
    //   "https://cdn.macbro.uz/macbro/94afd179-46f3-49df-aaa5-de83d8210be1",

    //   "https://cdn.macbro.uz/macbro/d396e206-2cb4-4ae0-8549-6496ae82f7ca",

    //   "https://cdn.macbro.uz/macbro/32740eb9-79c2-4f28-93f8-5a04c8672f12",

    //   "https://cdn.macbro.uz/macbro/605bacc5-0b9d-4736-a189-32380916d1bf",

    //   "https://cdn.macbro.uz/macbro/4a2be20b-558e-4dda-852e-413b23b153e3",
    // ],

    imgSilver: "https://cdn.macbro.uz/macbro/cf510327-b4e8-4378-a001-cbd8779504b8",

    silver: [
      "https://cdn.macbro.uz/macbro/cf510327-b4e8-4378-a001-cbd8779504b8",

      "https://cdn.macbro.uz/macbro/67762a5d-aa1e-4d3c-b3cd-fda8b50b937f",

      "https://cdn.macbro.uz/macbro/51b73a16-4170-4944-80cf-6f8bca51351e",

      "https://cdn.macbro.uz/macbro/e622b5e0-65fc-4e91-a70d-9025fc30fd58",

      "https://cdn.macbro.uz/macbro/d90e01d1-2087-48a3-9462-912f58ea138c",
    ],

    imgGray: "https://cdn.macbro.uz/macbro/edb6411f-3f34-47b1-a118-36045811f045",

    SpaceGray: [
      "https://cdn.macbro.uz/macbro/edb6411f-3f34-47b1-a118-36045811f045",

      "https://cdn.macbro.uz/macbro/7f956a88-c90a-44b4-ba40-50aac4807181",

      "https://cdn.macbro.uz/macbro/dfda6000-e242-4442-ad59-bac513806275",

      "https://cdn.macbro.uz/macbro/eb6d4a3e-b892-4c4f-aff6-46d333c494ae",

      "https://cdn.macbro.uz/macbro/66715875-b08c-45a0-9f79-5f4a222e5943",
    ],
  },
  // {
  //   id: 3,
  //   title: "MacBook Air 13-inch",
  //   ram: 32,
  //   gold: [
  //     "https://cdn.macbro.uz/macbro/94afd179-46f3-49df-aaa5-de83d8210be1",

  //     "https://cdn.macbro.uz/macbro/d396e206-2cb4-4ae0-8549-6496ae82f7ca",

  //     "https://cdn.macbro.uz/macbro/32740eb9-79c2-4f28-93f8-5a04c8672f12",

  //     "https://cdn.macbro.uz/macbro/605bacc5-0b9d-4736-a189-32380916d1bf",

  //     "https://cdn.macbro.uz/macbro/4a2be20b-558e-4dda-852e-413b23b153e3",
  //   ],
  //   silver: [
  //     "https://cdn.macbro.uz/macbro/cf510327-b4e8-4378-a001-cbd8779504b8",

  //     "https://cdn.macbro.uz/macbro/67762a5d-aa1e-4d3c-b3cd-fda8b50b937f",

  //     "https://cdn.macbro.uz/macbro/51b73a16-4170-4944-80cf-6f8bca51351e",

  //     "https://cdn.macbro.uz/macbro/e622b5e0-65fc-4e91-a70d-9025fc30fd58",

  //     "https://cdn.macbro.uz/macbro/d90e01d1-2087-48a3-9462-912f58ea138c",
  //   ],
  //   SpaceGray: [
  //     "https://cdn.macbro.uz/macbro/edb6411f-3f34-47b1-a118-36045811f045",

  //     "https://cdn.macbro.uz/macbro/7f956a88-c90a-44b4-ba40-50aac4807181",

  //     "https://cdn.macbro.uz/macbro/dfda6000-e242-4442-ad59-bac513806275",

  //     "https://cdn.macbro.uz/macbro/eb6d4a3e-b892-4c4f-aff6-46d333c494ae",

  //     "https://cdn.macbro.uz/macbro/66715875-b08c-45a0-9f79-5f4a222e5943",
  //   ],
  // },
]