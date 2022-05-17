
const header_obj = [{

    image: "https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
    title: "Top offers",
    ref: "/topoffers",
    id: 1,


},
{
    image: "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
    title: "Grocery",
    ref: "/grocery",
    id: 2,
}
    ,
{
    image: "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
    title: "Mobiles",
    ref: "/mobiles",
    id: 3,
}
    ,
{
    image: "https://rukminim2.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100",
    title: "Fashion",
    ref: "/fashion",
    tooltip: true,
    id: 4,
}
    ,
{
    image: "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    title: "Electronics",
    ref: "/electronics",
    tooltip: true,
    id: 5,
}
    ,
{
    image: "https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
    title: "Home",
    ref: "/home",
    tooltip: true,
    id: 6,
}

    ,
{
    image: "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    title: "Appliances",
    ref: "/appliances",
    tooltip: true,
    id: 7,
}

    ,
{
    image: "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    title: "Travel",
    ref: "/travel",
    id: 8,
}
    ,
{
    image: "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    title: "Beauty,Toys & More",
    ref: "/beauty_toys_more",
    tooltip: true,
    id: 9
}

];


const Fashion = [{
    id: 1,
    categories: "Men's Top Wear",
    subcategories: [{ title: "All" }, { title: "Mens' T-shirts" }, { title: "Mens' Causual Shirts" }, { title: "Mens' Formal Shirts" }, { title: "Mens' Kurtas" }, { title: "Mens' Ethnic sets" }, { title: "Mens' Blazers" }, { title: "Mens' Raincoat" }, { title: "Mens' Windcheaters" }, { title: "Mens' Suit" }, { title: "Mens' Fabrics" }]
},
{ id: 2, categories: "Men's Bottom Wear", subcategories: [{ title: "All" }, { title: "Mens' Jeans" }, { title: "Mens' Trousers" }, { title: "Mens' Trackpants" }, { title: "Mens' Shorts" }, { title: "Mens' Cargo" }, { title: "Mens' Threefourths" }, { title: "Mens' Pyjamas&Loungepants" }, { title: "Mens' Dhoti" }, { title: "Mens' Ethnic Pyjama" }] },
{ id: 3, categories: "Women Ethnic ", subcategories: [{ title: "All" }, { title: "Women Sarees" }, { title: "Women Kurtas & kurtis" }, { title: "Women Kurta Sets&Salwar Suits" }, { title: "Ethnic Dresses" }, { title: "Women Dress Materials" }, { title: "Women Gowns" }, { title: "Women Lehenga Cholis" }, { title: "Women Leggings & Patialas" }, { title: "Women Palazzos & Shararas" }, { title: "Women Blouse" }] },
{ id: 4, categories: "Women Western", subcategories: [{ title: "All" }, { title: "Womens Tops" }, { title: "Women T-shirts &Polo T-shirts" }, { title: "Women Jeans" }, { title: "Women Nighties & Night Dresses" }, { title: "Women Nightsuit" }, { title: "Women Track Pants" }, { title: "Women Trouser" }, { title: "Women jumpsuit" }, { title: "Women Shapewear" }] },
{ id: 5, categories: "Men Footwear", subcategories: [{ title: "All" }, { title: "Mens' Sports Shoes" }, { title: "Mens' Casual Shoes" }, { title: "Mens' Sandals & Floaters" }, { title: "Mens' Slippers & Flip Flops" }, { title: "Mens Formal Shoes" }, { title: "Mens Ethnic Shoes" }, { title: "Active Footwear" }, { title: "Combo Footwear" }, { title: "Shoe Care" }] },
{ id: 6, categories: "Women Footwear", subcategories: [{ title: "All" }, { title: "Womens Tops" }, { title: "Women T-shirts &Polo T-shirts" }, { title: "Women Jeans" }, { title: "Women Nighties & Night Dresses" }, { title: "Women Nightsuit" }, { title: "Women Track Pants" }, { title: "Women Trouser" }, { title: "Women jumpsuit" }, { title: "Women Shapewear" }] },
{ id: 7, categories: "Watches and Accessories", subcategories: [{ title: "Men &Women Watches" }, { title: "Men & Womens Sunglasses" }, { title: "Wallets" }, { title: "Men & Women Belts" }, { title: "Women Fashion Jewellery" }, { title: "Men Fashion Jewellery" }, { title: "Precious Jewellery" }, { title: "Precious Coins & Bars" }, { title: "Precious Articles" }, { title: "Frames & Contact Lenses" }] },
{ id: 8, categories: "Bags,Suitcases & Luggage", subcategories: [{ title: "All" }, { title: "Backpacks" }, { title: "Suitcases & Trolleys" }, { title: "Dufflebags" }, { title: "Rucksacks" }, { title: "Handbags" }, { title: "Slingbags" }, { title: "Women's Clutches & Wallets" }, { title: "Messenger Bags" }, { title: "Travel Accessories" }] },
{ id: 9, categories: "Bags,Suitcases & Luggage", subcategories: [{ title: "All" }, { title: "Girls Dresses" }, { title: "Boys & Girls Tshirts" }, { title: "Boys & Girls Combosets" }, { title: "Boys &Girls Ethnic Wear" }, { title: "Boys &Girls Jeans" }, { title: "Boys & Girls Shorts" }, { title: "Boys & Girls Trackpants" }, { title: "Boys &Girls Innerwear" }, { title: "infant Wear" }, { title: "Kids Slipper Flip Flops" }, { title: "kids Sports Shoes" }] },

]
const Electronics = [{
    id: 1,
    categories: "electronics",
    subcategories: [{ title: "All" }, { title: "Mens' T-shirts" }, { title: "Mens' Causual Shirts" }, { title: "Mens' Formal Shirts" }, { title: "Mens' Kurtas" }, { title: "Mens' Ethnic sets" }, { title: "Mens' Blazers" }, { title: "Mens' Raincoat" }, { title: "Mens' Windcheaters" }, { title: "Mens' Suit" }, { title: "Mens' Fabrics" }]
},
{ id: 2, categories: "electronics", subcategories: [{ title: "All" }] },
{ id: 3, categories: "Women' Ethnic ", subcategories: [{ title: "All" }, { title: "Mens' Causual Shirts" }] }

]
const Home = [{
    id: 1,
    categories: "Home",
    subcategories: [{ title: "All" }, { title: "Mens' T-shirts" }, { title: "Mens' Causual Shirts" }, { title: "Mens' Formal Shirts" }, { title: "Mens' Kurtas" }, { title: "Mens' Ethnic sets" }, { title: "Mens' Blazers" }, { title: "Mens' Raincoat" }, { title: "Mens' Windcheaters" }, { title: "Mens' Suit" }, { title: "Mens' Fabrics" }]
},
{ id: 2, categories: "Home", subcategories: [{ title: "All" }] },
{ id: 3, categories: "Home ", subcategories: [{ title: "All" }, { title: "Mens' Causual Shirts" }] }

]
const Appliances = [{
    id: 1,
    categories: "Appliances",
    subcategories: [{ title: "All" }, { title: "Mens' T-shirts" }, { title: "Mens' Causual Shirts" }, { title: "Mens' Formal Shirts" }, { title: "Mens' Kurtas" }, { title: "Mens' Ethnic sets" }, { title: "Mens' Blazers" }, { title: "Mens' Raincoat" }, { title: "Mens' Windcheaters" }, { title: "Mens' Suit" }, { title: "Mens' Fabrics" }]
},
{ id: 2, categories: "Appliances", subcategories: [{ title: "All" }] },
{ id: 3, categories: "Appliances' Ethnic ", subcategories: [{ title: "All" }, { title: "Mens' Causual Shirts" }] }

]
const Toys_others = [{
    id: 1,
    categories: "Toys_others",
    subcategories: [{ title: "All" }, { title: "Mens' T-shirts" }, { title: "Mens' Causual Shirts" }, { title: "Mens' Formal Shirts" }, { title: "Mens' Kurtas" }, { title: "Mens' Ethnic sets" }, { title: "Mens' Blazers" }, { title: "Mens' Raincoat" }, { title: "Mens' Windcheaters" }, { title: "Mens' Suit" }, { title: "Mens' Fabrics" }]
},
{ id: 2, categories: "Toys_others", subcategories: [{ title: "All" }] },
{ id: 3, categories: "Toys_others' Ethnic ", subcategories: [{ title: "All" }, { title: "Mens' Causual Shirts" }] }

]
export { Fashion, Electronics, Home, Appliances, Toys_others }


export default header_obj