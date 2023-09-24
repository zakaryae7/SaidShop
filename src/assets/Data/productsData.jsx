// ID 1 : Digital Courses Products
// ID 2 : Social Media Followers
// ID 3 : Channels Activition
// ID 4 : Music Movies Steaming

let productsData = [
    // ID 1 : Digital Courses Products
    {
        id: 11,
        categoriesRef: 1,
        image: '/src/assets/heroImg.jpg',
        title: 'Print On Demande',
        price: '69',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        caracters: ["1 Device / 1 Screen", "Shared Account", "1 Profile"],
    },
    {
        id: 12,
        categoriesRef: 1,
        image: '/src/assets/heroImg.jpg',
        title: 'Photoshop Design',
        price: '59',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        caracters: ["1 Device / 1 Screen", "Shared Account", "1 Profile"],
    },
    {
        id: 13,
        categoriesRef: 1,
        image: '/src/assets/heroImg.jpg',
        title: 'Digital Products',
        price: '99',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        caracters: ["1 Device / 1 Screen", "Shared Account", "1 Profile"],
    },
    {
        id: 14,
        categoriesRef: 1,
        image: '/src/assets/heroImg.jpg',
        title: 'Marketing Strategies',
        price: '299',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        caracters: ["1 Device / 1 Screen", "Shared Account", "1 Profile"],
    },

    // ID 2 : Social Media Followers

    {
        id: 21,
        linkfeature: true,
        categoriesRef: 2,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png',
        title: 'Instagram Followers',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        caracters: ["1 Device / 1 Screen", "Shared Account", "1 Profile"],
        price: "",
        prices: [
            {
                followers: '1K Followers',
                priceFollowers: '15',
                id: 1,

            },
            {
                followers: '2K Followers',
                priceFollowers: '60',
                id: 2,

            },
            {
                followers: '5K Followers',
                priceFollowers: '150',
                id: 3,

            }
        ]
    },
    {
        id: 22,
        linkfeature: false,
        categoriesRef: 2,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png',
        title: 'Instagram Accounts',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        caracters: ["1 Device / 1 Screen", "Shared Account", "1 Profile"],
        price: "",
        prices: [
            {
                id: 1,
                followers: '10K Followers',
                priceFollowers: '199',
                id: 1,

            },
            {
                id: 2,
                followers: '20K Followers',
                priceFollowers: '269',

            },
            {
                id: 3,
                followers: '30K Followers',
                priceFollowers: '549',

            },
            {
                id: 4,
                followers: '40K Followers',
                priceFollowers: '699',

            }
        ]
    },
    // ID 3 : Platforms Accounts
    {
        id: 31,
        linkfeature: false,
        categoriesRef: 3,
        image: 'https://i.pinimg.com/736x/95/67/12/956712f741713f9ccb6af2362392bcf0.jpg',
        title: 'Filmora Premium Software',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        caracters: ["", "", ""],
        price: "",
        prices: [
            {
                followers: '12 PRO MAC',
                priceFollowers: '99',
                id: 1,

            },
            {
                followers: 'X PRO',
                priceFollowers: '69',
                id: 2,

            },
        ]
    },
    {
        id: 32,
        linkfeature: false,
        categoriesRef: 3,
        image: 'https://www.facebook.com/images/fb_icon_325x325.png',
        title: 'Facebook Ads Account - Limit 25-50$',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        caracters: ["1 Device / 1 Screen", "Shared Account", "1 Profile"],
        price: "69",
    },
    {
        id: 33,
        linkfeature: false,
        categoriesRef: 3,
        image: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png',
        title: 'Discord Nitro Classic',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        caracters: ["1 Device / 1 Screen", "Shared Account", "1 Profile"],
        price: "99",
    },
    {
        id: 34,
        linkfeature: false,
        categoriesRef: 3,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Windows_logo_-_2021.svg/1024px-Windows_logo_-_2021.svg.png',
        title: 'Windows Pro Activition Key',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        caracters: ["1 Device / 1 Screen", "Shared Account", "1 Profile"],
        price: "",
        prices: [
            {
                followers: 'Windows 10 Pro Key',
                priceFollowers: '39',
                id: 1,

            },
            {
                followers: 'Windows 11 Pro Key',
                priceFollowers: '59',
                id: 2,

            },
        ]
    },


    // ID 4 : Music Movies Steaming
    {
        id: 41,
        linkfeature: false,
        categoriesRef: 4,
        image: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/64-netflix-256.png',
        title: 'NETFLIX',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        caracters: ["1 Device / 1 Screen", "Shared Account", "1 Profile"],
        price: "",
        prices: [
            {
                followers: '1 Month',
                priceFollowers: '39',
                id: 1,

            },
            {
                followers: '3 Month',
                priceFollowers: '110',
                id: 2,

            },
            {
                followers: '6 Month',
                priceFollowers: '210',
                id: 3,

            },
            {
                followers: '12 Month',
                priceFollowers: '349',
                id: 4,

            },
        ]
    },
    {
        id: 42,
        linkfeature: false,
        categoriesRef: 4,
        image: 'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Spotify-256.png',
        title: 'SPOTIFY',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        caracters: ["1 Device / 1 Screen", "Shared Account", "1 Profile"],
        price: "",
        prices: [
            {
                followers: '1 Month',
                priceFollowers: '29',
                id: 1,

            },
            {
                followers: '3 Month',
                priceFollowers: '79',
                id: 2,

            },
            {
                followers: '6 Month',
                priceFollowers: '149',
                id: 3,

            },
            {
                followers: '12 Month',
                priceFollowers: '249',
                id: 4,

            },
        ]
    },
    {
        id: 43,
        linkfeature: false,
        categoriesRef: 4,
        image: 'https://logonoid.com/images/disney-logo.png',
        title: 'DISNEY',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        caracters: ["1 Device / 1 Screen", "Shared Account", "1 Profile"],
        price: "",
        prices: [
            {
                followers: '1 Month',
                priceFollowers: '29',
                id: 1,

            },
            {
                followers: '3 Month',
                priceFollowers: '69',
                id: 2,

            },
            {
                followers: '6 Month',
                priceFollowers: '130',
                id: 3,

            },
            {
                followers: '12 Month',
                priceFollowers: '220',
                id: 4,

            },
        ]
    },
    {
        id: 45,
        linkfeature: false,
        categoriesRef: 4,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/OSN_2020_logo.svg/1200px-OSN_2020_logo.svg.png',
        title: 'OSN',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        caracters: ["1 Device / 1 Screen", "Shared Account", "1 Profile"],
        price: "",
        prices: [
            {
                followers: '1 Month',
                priceFollowers: '29',
                id: 1,

            },
            {
                followers: '3 Month',
                priceFollowers: '69',
                id: 2,

            },
            {
                followers: '6 Month',
                priceFollowers: '130',
                id: 3,

            },
            {
                followers: '12 Month',
                priceFollowers: '220',
                id: 4,

            },
        ]
    },
    {
        id: 46,
        linkfeature: false,
        categoriesRef: 4,
        image: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/395_Youtube_logo-256.png',
        title: 'YOUTUBE',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        caracters: ["1 Device / 1 Screen", "Shared Account", "1 Profile"],
        price: "",
        prices: [
            {
                followers: '1 Month',
                priceFollowers: '29',
                id: 1,

            },
            {
                followers: '3 Month',
                priceFollowers: '79',
                id: 2,

            },
            {
                followers: '6 Month',
                priceFollowers: '149',
                id: 3,

            },
            {
                followers: '12 Month',
                priceFollowers: '249',
                id: 4,

            },
        ]
    },
    {
        id: 44,
        linkfeature: false,
        categoriesRef: 4,
        image: 'https://logodownload.org/wp-content/uploads/2018/07/prime-video.png',
        title: 'VIDEO PRIME',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        caracters: ["1 Device / 1 Screen", "Shared Account", "1 Profile"],
        price: "",
        prices: [
            {
                followers: '1 Month',
                priceFollowers: '29',
                id: 1,
            },
            {
                followers: '3 Month',
                priceFollowers: '79',
                id: 2,

            },
            {
                followers: '6 Month',
                priceFollowers: '149',
                id: 3,

            },
            {
                followers: '12 Month',
                priceFollowers: '249',
                id: 4,

            },
        ]
    },
]
export default productsData;