// static model (following Yelp JSON format)
var initialPlaces = [
{
	name: "Burro Cheese Kitchen",
	id: "burro-cheese-kitchen-austin",
	coordinates: {latitude: 30.251704, longitude: -97.748737},
	display_phone: "(512) 865-7730",
	price: "$",
	rating: "4",
	image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/takpCwqCPf8mnqSYr3pXzw/o.jpg",
	categories: [
		{alias: "sandwiches", title: "Sandwiches"},
		{alias: "foodtrucks", title: "Food Trucks"}
		]
	},
{
	name: "Jo's Coffee",
	id: "jos-coffee-austin",
	coordinates: {latitude: 30.2510292664283, longitude: -97.7493981332563},
	display_phone: "(512) 444-3800",
	price: "$",
	rating: "4",
	image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/M_MsaPyJwL21j-9Eb-5ERw/o.jpg",
	categories: [
		{alias: "coffee", title: "Coffee & Tea"},
		{alias: "sandwiches", title: "Sandwiches"}
		]
	},
{
	name: "Amy's Ice Creams",
	id: "amys-ice-creams-austin",
	coordinates: {latitude: 30.2509517669678, longitude: -97.7489318847656},
	display_phone: "(512) 440-7488",
	price: "$",
	rating: "4",
	image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/7alA2Kg_d26zbNopW5QyFg/o.jpg",
	categories: [
		{alias: "icecream", title: "Ice Cream & Frozen Yogurt"}
		]
	},
{
	name: "Holy Cacao",
	id: "holy-cacao-austin",
	coordinates: {latitude: 30.2507441, longitude: -97.7542812},
	display_phone: "",
	price: "$",
	rating: "4",
	image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/VT19XvhNMNFd_N3pOzcSjw/o.jpg",
	categories: [
		{alias: "desserts", title: "Desserts"},
		{alias: "newamerican", title: "American (New)"},
		{alias: "foodtrucks", title: "Food Trucks"}
		]
	},
{
	name: "TOMS",
	id: "toms-austin-5",
	coordinates: {latitude: 30.2496013641357, longitude: -97.7492523193359},
	display_phone: "(512) 350-2115",
	price: "$$",
	rating: "4",
	image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/8JglcR9rHNfDkU6jeDn4xw/o.jpg",
	categories: [
		{alias: "coffee", title: "Coffee & Tea"},
		{alias: "shoes", title: "Shoe Stores"},
		{alias: "opticians", title: "Eyewear & Opticians"}
		]
	},
{
	name: "The Tasty Spoon",
	id: "the-tasty-spoon-austin-2",
	coordinates: {latitude: 30.25045, longitude: -97.7544999},
	display_phone: "",
	price: "$",
	rating: "5",
	image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/4r9iDdPIrLz7rOmdYs2mLQ/o.jpg",
	categories: [
		{alias: "icecream", title: "Ice Cream & Frozen Yogurt"}
		]
	},
{
	name: "Elizabeth Street Cafe",
	id: "elizabeth-street-cafe-austin",
	coordinates: {latitude: 30.2497925192929, longitude: -97.7546439319185},
	display_phone: "(512) 291-2881",
	price: "$$",
	rating: "3.5",
	image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/fzw0IAJzoYMPbpH0bPndKA/o.jpg",
	categories: [
		{alias: "vietnamese", title: "Vietnamese"},
		{alias: "french", title: "French"},
		{alias: "coffee", title: "Coffee & Tea"}
		]
	},
{
	name: "Hey Cupcake!",
	id: "hey-cupcake-austin-3",
	coordinates: {latitude: 30.2487529780589, longitude: -97.7497779778312},
	display_phone: "(512) 476-2253",
	price: "$",
	rating: "3",
	image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/4EarN8YrQrt02mElwakkUA/o.jpg",
	categories: [
		{alias: "desserts", title: "Desserts"},
		{alias: "foodtrucks", title: "Food Trucks"},
		{alias: "cupcakes", title: "Cupcakes"}
		]
	},
{
	name: "Gourdough's",
	id: "gourdoughs-austin",
	coordinates: {latitude: 30.249509, longitude: -97.754707},
	display_phone: "",
	price: "$",
	rating: "4.5",
	image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/MIpCNen3TYf30m2-HRIu5A/o.jpg",
	categories: [
		{alias: "donuts", title: "Donuts"},
		{alias: "foodtrucks", title: "Food Trucks"}
		]
	},
{
	name: "The Science Cream",
	id: "the-science-cream-austin-3",
	coordinates: {latitude: 30.2483508682758, longitude: -97.7500789537383},
	display_phone: "(512) 986-1281",
	price: "$",
	rating: "4.5",
	image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/cbDt1MTAVmmtCna3Dm45kw/o.jpg",
	categories: [
		{alias: "icecream", title: "Ice Cream & Frozen Yogurt"},
		{alias: "streetvendors", title: "Street Vendors"}
		]
	},
{
	name: "Seventh Flag Coffee",
	id: "seventh-flag-coffee-austin-2",
	coordinates: {latitude: 30.24971, longitude: -97.75528},
	display_phone: "(512) 596-4477",
	price: "$",
	rating: "4",
	image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/teOgCQY0kwsffEFjFri5rA/o.jpg",
	categories: [
		{alias: "coffee", title: "Coffee & Tea"}
		]
	},
{
	name: "Bennu Coffee",
	id: "bennu-coffee-austin-2",
	coordinates: {latitude: 30.25609, longitude: -97.747},
	display_phone: "(512) 448-3919",
	price: "$",
	rating: "4.5",
	image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/2YFfUfQ6bMizkQHBEhnpcA/o.jpg",
	categories: [
		{alias: "coffee", title: "Coffee & Tea"},
		{alias: "breakfast_brunch", title: "Breakfast & Brunch"}
		]
	},
{
	name: "Enoteca Vespaio",
	id: "enoteca-vespaio-austin",
	coordinates: {latitude: 30.24726, longitude: -97.75081},
	display_phone: "(512) 441-7672",
	price: "$$",
	rating: "4",
	image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/twzuLLY6ZTrnRmZlwxfPzw/o.jpg",
	categories: [
		{alias: "italian", title: "Italian"},
		{alias: "desserts", title: "Desserts"},
		{alias: "breakfast_brunch", title: "Breakfast & Brunch"}
		]
	},
{
	name: "Mañana Coffee, Juice & Bakeshop",
	id: "mañana-coffee-juice-and-bakeshop-austin",
	coordinates: {latitude: 30.2474, longitude: -97.75006},
	display_phone: "(512) 872-3144",
	price: "$$",
	rating: "4.5",
	image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/exK5Si4JdnAIbRBSCc1YuA/o.jpg",
	categories: [
		{alias: "coffee", title: "Coffee & Tea"},
		{alias: "juicebars", title: "Juice Bars & Smoothies"},
		{alias: "desserts", title: "Desserts"}
		]
	},
{
	name: "Big Top Candy Shop",
	id: "big-top-candy-shop-austin",
	coordinates: {latitude: 30.24686, longitude: -97.75097},
	display_phone: "(512) 462-2220",
	price: "$",
	rating: "4.5",
	image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/TKyaWiMxaY5AK027Go3fdw/o.jpg",
	categories: [
		{alias: "candy", title: "Candy Stores"}
		]
	},
{
	name: "Dolce Neve",
	id: "dolce-neve-austin",
	coordinates: {latitude: 30.247625, longitude: -97.755404},
	display_phone: "(512) 804-5568",
	price: "$",
	rating: "4.5",
	image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/1DgEa_pgroGWjQeZasXo-Q/o.jpg",
	categories: [
		{alias: "gelato", title: "Gelato"},
		{alias: "icecream", title: "Ice Cream & Frozen Yogurt"},
		{alias: "coffee", title: "Coffee & Tea"}
		]
	},
{
	name: "La Patisserie",
	id: "la-patisserie-austin",
	coordinates: {latitude: 30.247668, longitude: -97.756206},
	display_phone: "(512) 912-0033",
	price: "$$",
	rating: "4",
	image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/9GvFx_JtBZaKX_qdEYfoxA/o.jpg",
	categories: [
		{alias: "desserts", title: "Desserts"},
		{alias: "bakeries", title: "Bakeries"},
		{alias: "coffee", title: "Coffee & Tea"}
		]
	},
{
	name: "The Soup Peddler Real Food & Juice Bar",
	id: "the-soup-peddler-real-food-and-juice-bar-austin-5",
	coordinates: {latitude: 30.24629, longitude: -97.75613},
	display_phone: "(512) 444-7687",
	price: "$",
	rating: "4",
	image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/Z4wMQRNcKaJADFKNdATFpA/o.jpg",
	categories: [
		{alias: "soup", title: "Soup"},
		{alias: "juicebars", title: "Juice Bars & Smoothies"}
		]
	},
{
	name: "Bouldin Creek Cafe",
	id: "bouldin-creek-cafe-austin",
	coordinates: {latitude: 30.24646, longitude: -97.75677},
	display_phone: "(512) 416-1601",
	price: "$",
	rating: "4.5",
	image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/pCa5s2khM7-AT5Sz3DpBfQ/o.jpg",
	categories: [
		{alias: "vegetarian", title: "Vegetarian"},
		{alias: "cafes", title: "Cafes"},
		{alias: "vegan", title: "Vegan"}
		]
	},
{
	name: "Sugar Mama's Bakeshop",
	id: "sugar-mamas-bakeshop-austin-3",
	coordinates: {latitude: 30.24613, longitude: -97.7564},
	display_phone: "(512) 448-3727",
	price: "$",
	rating: "4",
	image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/16R3E16b_T7jwx4Wyu3ExA/o.jpg",
	categories: [
		{alias: "desserts", title: "Desserts"},
		{alias: "bakeries", title: "Bakeries"},
		{alias: "tradamerican", title: "American (Traditional)"}
		]
	},
{
	name: "La Mexicana Bakery",
	id: "la-mexicana-bakery-austin",
	coordinates: {latitude: 30.2458419799805, longitude: -97.7571182250977},
	display_phone: "(512) 443-6369",
	price: "$",
	rating: "3.5",
	image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/Pj290w0FhQqZhkrle7yhGA/o.jpg",
	categories: [
		{alias: "bakeries", title: "Bakeries"},
		{alias: "mexican", title: "Mexican"},
		{alias: "desserts", title: "Desserts"}
		]
	},
{
	name: "Stonehouse Coffee & Bar",
	id: "stonehouse-coffee-and-bar-austin-2",
	coordinates: {latitude: 30.2552525364648, longitude: -97.7617144054383},
	display_phone: "(512) 879-9429",
	price: "$$",
	rating: "4.5",
	image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/t2A59-rysQg6AhoXs2S9-Q/o.jpg",
	categories: [
		{alias: "coffee", title: "Coffee & Tea"},
		{alias: "beer_and_wine", title: "Beer, Wine & Spirits"},
		{alias: "wine_bars", title: "Wine Bars"}
		]
	},
{
	name: "Polvo's Mexican Restaurant",
	id: "polvos-mexican-restaurant-austin",
	coordinates: {latitude: 30.24532, longitude: -97.75745},
	display_phone: "(512) 441-5446",
	price: "$$",
	rating: "3.5",
	image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/1TsfLS-QSksfPQWRaMc6rg/o.jpg",
	categories: [
		{alias: "mexican", title: "Mexican"},
		{alias: "desserts", title: "Desserts"},
		{alias: "breakfast_brunch", title: "Breakfast & Brunch"}
		]
	},
{
	name: "Once Over Coffee Bar",
	id: "once-over-coffee-bar-austin-2",
	coordinates: {latitude: 30.2448539733887, longitude: -97.7570266723633},
	display_phone: "(512) 326-9575",
	price: "$",
	rating: "4",
	image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/IjOKbLQwsUYIQ7NbYhZhQg/o.jpg",
	categories: [
		{alias: "coffee", title: "Coffee & Tea"}
		]
    },
{
	name: "Shake Shack",
	id: "shake-shack-austin",
	coordinates: {latitude: 30.2558660897055, longitude: -97.7617584698364},
	display_phone: "(512) 717-0430",
	price: "$$",
	rating: "3.5",
	image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/O9hk45UDmo8fkXJf3TiP8Q/o.jpg",
	categories: [
		{alias: "burgers", title: "Burgers"},
		{alias: "hotdog", title: "Hot Dogs"},
		{alias: "icecream", title: "Ice Cream & Frozen Yogurt"}
		]
	},
{
	name: "Lick Honest Ice Creams",
	id: "lick-honest-ice-creams-austin-3",
	coordinates: {latitude: 30.2556331843404, longitude: -97.7625557304413},
	display_phone: "(512) 363-5622",
	price: "$",
	rating: "4.5",
	image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/Qj8FKzngdxy-lOyD7yZY1A/o.jpg",
	categories: [
		{alias: "icecream", title: "Ice Cream & Frozen Yogurt"}
		]
	},
{
	name: "Caffé Medici",
	id: "caffé-medici-austin-5",
	coordinates: {latitude: 30.2557502471859, longitude: -97.7627777092766},
	display_phone: "(512) 445-7212",
	price: "$",
	rating: "4",
	image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/CVoLaKAsBbh4lJpVCVUfNA/o.jpg",
	categories: [
		{alias: "coffee", title: "Coffee & Tea"}
		]
	},
{
	name: "Thai Fresh",
	id: "thai-fresh-austin",
	coordinates: {latitude: 30.24789, longitude: -97.76176},
	display_phone: "(512) 494-6436",
	price: "$$",
	rating: "3.5",
	image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/Bk_bop5Ldxv39DB3DRCL3Q/o.jpg",
	categories: [
		{alias: "thai", title: "Thai"},
		{alias: "coffee", title: "Coffee & Tea"},
		{alias: "desserts", title: "Desserts"}
		]
	},
{
	name: "Thrice",
	id: "thrice-austin",
	coordinates: {latitude: 30.24788, longitude: -97.76167},
	display_phone: "(512) 447-9473",
	price: "$",
	rating: "3.5",
	image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/2JncZ9Gy-Wq4IR08cJ9_pg/o.jpg",
	categories: [
		{alias: "coffee", title: "Coffee & Tea"},
		{alias: "musicvenues", title: "Music Venues"}
		]
	},
{
	name: "Bananarchy",
	id: "bananarchy-austin",
	coordinates: {latitude: 30.2443714141846, longitude: -97.7582397460938},
	display_phone: "(512) 522-9316",
	price: "$",
	rating: "4.5",
	image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/FkU0ETNRb16R5J557x9wTQ/o.jpg",
	categories: [
		{alias: "desserts", title: "Desserts"},
		{alias: "foodtrucks", title: "Food Trucks"},
		{alias: "catering", title: "Caterers"}
		]
	},
{
	name: "Starbucks",
	id: "starbucks-austin-38",
	coordinates: {latitude: 30.2519187927246, longitude: -97.7635116577148},
	display_phone: "(512) 326-1783",
	price: "$",
	rating: "3.5",
	image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/lVU5SMVysA-qkZDGhn1dzw/o.jpg",
	categories: [
		{alias: "coffee", title: "Coffee & Tea"}
		]
	},
{
	name: "Fair Bean Coffee",
	id: "fair-bean-coffee-austin",
	coordinates: {latitude: 30.244016, longitude: -97.758476},
	display_phone: "(512) 444-2326",
	price: "$",
	rating: "4",
	image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/qS2YkLXFQ6BvuviKIMM-3A/o.jpg",
	categories: [
		{alias: "coffee", title: "Coffee & Tea"}
		]
	},
{
	name: "The Coffee Bean and Tea Leaf",
	id: "the-coffee-bean-and-tea-leaf-austin",
	coordinates: {latitude: 30.26268, longitude: -97.75742},
	display_phone: "(512) 351-8680",
	price: "$",
	rating: "3.5",
	image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/ACoEYdtBi-mqruvqLOBraQ/o.jpg",
	categories: [
		{alias: "coffee", title: "Coffee & Tea"}
		]
	},
{
	name: "Alta's Cafe",
	id: "altas-cafe-austin",
	coordinates: {latitude: 30.2605195889466, longitude: -97.7417051394332},
	display_phone: "(512) 499-0470",
	price: "$",
	rating: "4",
	image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/vzLCN_uX7Q6tPF740e4_eQ/o.jpg",
	categories: [
		{alias: "coffee", title: "Coffee & Tea"},
		{alias: "cafes", title: "Cafes"}
		]
	},
{
	name: "Juliet Italian Kitchen",
	id: "juliet-italian-kitchen-austin-2",
	coordinates: {latitude: 30.26184, longitude: -97.76006},
	display_phone: "(512) 479-1800",
	price: "$$",
	rating: "3.5",
	image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/RqOGIy9xyJwa4eOifv1fIw/o.jpg",
	categories: [
		{alias: "italian", title: "Italian"},
		{alias: "cocktailbars", title: "Cocktail Bars"},
		{alias: "desserts", title: "Desserts"}
		]
	},
{
	name: "RiverCity Market",
	id: "rivercity-market-austin",
	coordinates: {latitude: 30.240873, longitude: -97.752353},
	display_phone: "(512) 462-4955",
	price: "$$",
	rating: "4",
	image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/FSXbGAgVpqsnM6Bey11SPA/o.jpg",
	categories: [
		{alias: "beer_and_wine", title: "Beer, Wine & Spirits"},
		{alias: "grocery", title: "Grocery"},
		{alias: "gourmet", title: "Specialty Food"}
		]
	},
{
	name: "Lamberts Downtown Barbecue",
	id: "lamberts-downtown-barbecue-austin",
	coordinates: {latitude: 30.2652, longitude: -97.74785},
	display_phone: "(512) 494-1500",
	price: "$$",
	rating: "4",
	image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/jYZvlfvda6-gUZkVNnnIXA/o.jpg",
	categories: [
		{alias: "bbq", title: "Barbeque"},
		{alias: "breakfast_brunch", title: "Breakfast & Brunch"},
		{alias: "sandwiches", title: "Sandwiches"}
		]
	},
{
	name: "Austin Java",
	id: "austin-java-austin-3",
	coordinates: {latitude: 30.264979, longitude: -97.747078},
	display_phone: "(512) 481-9400",
	price: "$",
	rating: "3.5",
	image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/wwFjBvkswsJAhLfXjne-ug/o.jpg",
	categories: [
		{alias: "coffee", title: "Coffee & Tea"},
		{alias: "breakfast_brunch", title: "Breakfast & Brunch"},
		{alias: "tradamerican", title: "American (Traditional)"}
		]
	},
{
	name: "Venezia Italian Gelato",
	id: "venezia-italian-gelato-austin",
	coordinates: {latitude: 30.250550374535, longitude: -97.7654993534088},
	display_phone: "(512) 549-1225",
	price: "$",
	rating: "4.5",
	image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/DH3lyZUuesCBvUHfyfTCQQ/o.jpg",
	categories: [
		{alias: "coffee", title: "Coffee & Tea"},
		{alias: "icecream", title: "Ice Cream & Frozen Yogurt"},
		{alias: "gelato", title: "Gelato"}
		]
	},
{
    name: "Cafe Ruckus",
    id: "cafe-ruckus-austin",
    coordinates: {latitude: 30.2653443, longitude: -97.7481776},
    display_phone: "(512) 476-7825",
    price: "$",
    rating: "4.5",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/OLmEwbpjEvafaiHINVKemA/o.jpg",
    categories: [
        {alias: "coffee", title: "Coffee & Tea"},
        {alias: "tea", title: "Tea Rooms"}
        ]
    },
{
    name: "Downtown Jo's Coffee Shop",
    id: "downtown-jos-coffee-shop-austin",
    coordinates: {latitude: 30.26505, longitude: -97.74606},
    display_phone: "(512) 469-9003",
    price: "$",
    rating: "3.5",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/7dHlglhAIZ8UcOeb_Sn-MA/o.jpg",
    categories: [
        {alias: "coffee", title: "Coffee & Tea"},
        {alias: "sandwiches", title: "Sandwiches"},
        {alias: "breakfast_brunch", title: "Breakfast & Brunch"}
        ]
    },
{
    name: "Picnik Austin",
    id: "picnik-austin-austin",
    coordinates: {latitude: 30.2512817994368, longitude: -97.7659426379593},
    display_phone: "(512) 293-6118",
    price: "$$",
    rating: "4.5",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/baZnIJYh57ONtS6LbIW4UQ/o.jpg",
    categories: [
        {alias: "coffee", title: "Coffee & Tea"},
        {alias: "gluten_free", title: "Gluten-Free"},
        {alias: "juicebars", title: "Juice Bars & Smoothies"}
        ]
    },
{
    name: "Berry Austin",
    id: "berry-austin-austin-2",
    coordinates: {latitude: 30.264634, longitude: -97.744753},
    display_phone: "(512) 827-2757",
    price: "$",
    rating: "4.5",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/w6lZDav4GwWNaMGPvsGsAg/o.jpg",
    categories: [
        {alias: "icecream", title: "Ice Cream & Frozen Yogurt"},
        {alias: "juicebars", title: "Juice Bars & Smoothies"},
        {alias: "desserts", title: "Desserts"}
        ]
    },
{
    name: "Austin Java",
    id: "austin-java-austin-2",
    coordinates: {latitude: 30.2623476997192, longitude: -97.7617657184601},
    display_phone: "(512) 482-9450",
    price: "$",
    rating: "3",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/uPYnRxn6mA-TwbtB_UQipQ/o.jpg",
    categories: [
        {alias: "coffee", title: "Coffee & Tea"},
        {alias: "breakfast_brunch", title: "Breakfast & Brunch"},
        {alias: "venues", title: "Venues & Event Spaces"}
        ]
    },
{
    name: "Caffé Medici",
    id: "caffé-medici-austin-4",
    coordinates: {latitude: 30.2646273022446, longitude: -97.7441918849945},
    display_phone: "(512) 827-2770",
    price: "$",
    rating: "4",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/5_SlVAR5SM_QU7efK2NyeA/o.jpg",
    categories: [
        {alias: "coffee", title: "Coffee & Tea"}
        ]
    },
{
    name: "Café Crêpe",
    id: "café-crêpe-austin-2",
    coordinates: {latitude: 30.2638586673367, longitude: -97.7418548134918},
    display_phone: "(512) 480-0084",
    price: "$$",
    rating: "4",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/aBq9OLQcffa9cY7v6fkSEQ/o.jpg",
    categories: [
        {alias: "creperies", title: "Creperies"},
        {alias: "french", title: "French"},
        {alias: "breakfast_brunch", title: "Breakfast & Brunch"}
        ]
    },
{
    name: "Piranha Killer Sushi",
    id: "piranha-killer-sushi-austin",
    coordinates: {latitude: 30.2641316338822, longitude: -97.7414880546311},
    display_phone: "(512) 473-8775",
    price: "$$",
    rating: "3.5",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/BJoZm4kwdhAhF74oUBovIw/o.jpg",
    categories: [
        {alias: "sushi", title: "Sushi Bars"},
        {alias: "desserts", title: "Desserts"},
        {alias: "wine_bars", title: "Wine Bars"}
        ]
    },
{
    name: "Barley Bean",
    id: "barley-bean-austin-3",
    coordinates: {latitude: 30.26588, longitude: -97.744672},
    display_phone: "(512) 220-2326",
    price: "$",
    rating: "3.5",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/wvAuVQhSOFRJPS_0cL5_7A/o.jpg",
    categories: [
        {alias: "coffee", title: "Coffee & Tea"},
        {alias: "cafes", title: "Cafes"},
        {alias: "beerbar", title: "Beer Bar"}
        ]
    }
];

var filteredPlaces;
var map;
var iw = null; // info window

// Initialize Everything
function Initialize() {
	$(document).ready(function(){
		// responsive nav
		$(".toggleNav").on("click", function(){
			$("#placesNav").toggleClass("show");
			$(".toggleNav").toggleClass("shift");
			$("header").toggleClass("shift");
		});
		// responsive header
		$("header").on("click", function(){
			$("#placesNav").toggleClass("show");
			$(".toggleNav").toggleClass("shift");
			$("header").toggleClass("shift");
		});

		filteredPlaces = filterPlaces(initialPlaces);
		initMap();
		initMarkers();
		ko.applyBindings(new viewModel());
	});
}

// Excludes these places from the map app
function filterPlaces(ps) {
    var fs = [];
    ps.forEach(function(f, i){
        switch(f.id) {
			// filters out these places
			case "burro-cheese-kitchen-austin":
			case "shake-shack-austin":
            case "toms-austin-5":
            case "enoteca-vespaio-austin":
            case "big-top-candy-shop-austin":
            case "la-patisserie-austin":
            case "the-soup-peddler-real-food-and-juice-bar-austin-5":
            case "sugar-mamas-bakeshop-austin-3":
            case "la-mexicana-bakery-austin":
            case "polvos-mexican-restaurant-austin":
            case "thai-fresh-austin":
            case "thrice-austin":
            case "altas-cafe-austin":
            case "juliet-italian-kitchen-austin-2":
            case "rivercity-market-austin":
            case "lamberts-downtown-barbecue-austin":
            case "picnik-austin-austin":
            case "café-crêpe-austin-2":
            case "piranha-killer-sushi-austin":
			case "barley-bean-austin-3":
			case "austin-java-austin-3":
			case "caffé-medici-austin-5":
			case "mañana-coffee-juice-and-bakeshop-austin":
			case "stonehouse-coffee-and-bar-austin-2":
			case "hey-cupcake-austin-3":
			case "gourdoughs-austin":
			case "bouldin-creek-cafe-austin":
				break;
			// adds 'ice cream' category in place of dessert category
			case "bananarchy-austin":
			case "holy-cacao-austin":
				(f.categories).forEach(function(c){
					if(c.alias === "desserts") {
						c.alias = "icecream";
						c.title = "Ice Cream & Frozen Yogurt";
					}
				});
		default:
		    // if coordinates are not NULL add
            if(typeof f.coordinates.latitude === 'number' && typeof f.coordinates.longitude === 'number') {
                fs.push(f);
            }
        }
    });
    return fs;
}

function initMap() {
    // create map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 30.2548333, lng: -97.7548521},
        zoom: 15,
		disableDefaultUI: true,
		styles: [
			{
			featureType: 'poi',
			stylers: [{visibility: 'off'}]
			},
			{
			featureType: 'poi.park',
			stylers: [{visibility: 'on'}]
			},
			{
			featureType: 'transit',
			elementType: 'labels.icon',
			stylers: [{visibility: 'off'}]
			},
			{elementType: 'geometry', stylers: [{color: '#fdf8e2'}]},
			{elementType: 'labels.text.stroke', stylers: [{color: '#ffffff'}]},
			{elementType: 'labels.text.fill', stylers: [{color: '#be6e20'}]},
			{
				featureType: 'administrative.locality',
				elementType: 'labels.text.fill',
				stylers: [{color: '#d59563'}]
			},
			{
				featureType: 'poi',
				elementType: 'labels.text.fill',
				stylers: [{color: '#ff80ba'}]
			},
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [{color: '#ffbdd3'}]
			},
			{
				featureType: 'poi.park',
				elementType: 'labels.text.fill',
				stylers: [{color: '#ff80ba'}]
			},
			{
				featureType: 'road',
				elementType: 'geometry',
				stylers: [{color: '#be6e20'}]
			},
			{
				featureType: 'road',
				elementType: 'geometry.stroke',
				stylers: [{color: '#be6e20'}]
			},
			{
				featureType: 'road',
				elementType: 'labels.text.fill',
				stylers: [{color: '#be6e20'}]
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry',
				stylers: [{color: '#b55a0f'}]
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry.stroke',
				stylers: [{color: '#b55a0f'}]
			},
			{
				featureType: 'road.highway',
				elementType: 'labels.text.fill',
				stylers: [{color: '#f3d19c'}]
			},
			{
				featureType: 'transit',
				elementType: 'geometry',
				stylers: [{color: '#ffbdd3'}]
			},
			{
				featureType: 'transit.station',
				elementType: 'labels.text.fill',
				stylers: [{color: '#d59563'}]
			},
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [{color: '#ffbdd3'}]
			},
			{
				featureType: 'water',
				elementType: 'labels.text.fill',
				stylers: [{color: '#ffffff'}]
			},
			{
				featureType: 'water',
				elementType: 'labels.text.stroke',
				stylers: [{color: '#17263c'}]
			}
        ]
	});
}

function initMarkers() {
	// create markers and assign to associated filtered place
	filteredPlaces.forEach(function(f){
		var m = new google.maps.Marker({
            position: {lat: f.coordinates.latitude, lng: f.coordinates.longitude},
            map: map,
            animation: google.maps.Animation.DROP
		});
		f.marker = m;
	});
}

function viewModel() {
    var self = this;
	this.placesInput = ko.observable("");
	var defaultInput = "";
    this.typeToShow = ko.observable("all");
	this.places = ko.observableArray([]);

	// populate places
    filteredPlaces.forEach(function(p, i){
		self.places.push(p);
	});
	console.log(this.places());

	// initialize place info windows
	self.places().forEach(function(p){
		google.maps.event.addListener(p.marker,"click",function(){
			self.markPlace(p);
		});
	});

	// animate marker and display its info window
    this.markPlace = function(p) {
        p.marker.setMap(map);

        // open info window
        if(iw)iw.close();
        iw=new google.maps.InfoWindow({content: formatInfoWindow(p)});
        iw.open(map, p.marker);

        // specified marker bounces and cancels other marker animations
		self.places().forEach(function(h){
			if(p.id === h.id) {
				p.marker.setAnimation(google.maps.Animation.BOUNCE);
			}
			else {
				h.marker.setAnimation(null);
			}
		});
	}

	function formatInfoWindow(p){
		// returns number of stars to display
		var stars = displayStars(p);
		//var address = displayAddress(p);
		var address = "<p><span class=\"address\">123 Fake Street</span><span class=\"address\">Austin, TX 78704</span></p>";
		var phone = "<a class=\"phone\" href=\"tel:#\">(123) 456-7890</a>"
		
		var s = "<div class=\"infoWindowContent\">" + 
				"<a class=\"name\" title=\"" + p.name + "\" href=\"" + p.url + "\">" + p.name + "</a>" +
				"<p><div class=\"yelpStars " + stars + "\"></div>" +
				"<span class=\"reviewCount\"> Reviews: 1000</span></p>" +
				"<p><span class=\"price\">" + p.price + "</span> · " +
				"<span class=\"category\">" + p.categories[0].title + "</span></p>" +
				address +
				/*"<a class=\"name\" title=\"" + p.name + "\" href=\"tel:" + p.phone + "\">" + p.display_phone + "</a>" + */
				phone +
				"</div>";
		return s;
	}

	function displayStars(p) {
		var rs = p.rating.toString();
		switch(rs) {
			case "1":
				return "oneStar";
				break;
			case "1.5":
				return "oneHalfStar";
				break;
			case "2":
				return "twoStars";
				break;
			case "2.5":
				return "twoHalfStars";
				break;
			case "3":
				return "threeStars";
				break;
			case "3.5":
				return "threeHalfStars";
				break;
			case "4":
				return "fourStars";
				break;
			case "4.5":
				return "fourHalfStars";
				break;
			case "5":
				return "fiveStars";
				break;
			default: 
				return "";
		}
	}

	function displayAddress(p) {
		if(p.location.display_address) {
			var s = "<p>";
			
			(p.location.display_address).forEach(function(a){
				s += "<span class=\"address\">" + a + "</span>"
			});
			s += "</p>";
				return s;
			}
		else {
			console.log("no display addresses available");
		}
	}

	// shows places based on both category and name (if name exists)
    this.placesToShow = ko.computed(function() {
		var desiredType = self.typeToShow();
		if(iw)iw.close();
        if (desiredType === "all") {
            return(ko.utils.arrayFilter(self.places(), function(p) {
				if(self.placesInput() !== defaultInput) {
					if( containsMatch(p.name) || categoryMatch(p.categories) ) {
						p.marker.setMap(map);
						return true;
					}
					else {
						p.marker.setMap(null);
						return false;
					}
				}
				p.marker.setMap(map);
				return true;
			}));
		}
        
        // if match is found, add to list of places to be shown
        return(ko.utils.arrayFilter(self.places(), function(p) {
			var matchCat = false;
            (p.categories).forEach(function(c){
				if(c.alias === desiredType) {
					matchCat = true;
				}
			});
			// matchCat should always be true before checking for matched input
			if(matchCat == true) {
				if(self.placesInput() !== defaultInput) {
					if( containsMatch(p.name) || categoryMatch(p.categories) ) {
						p.marker.setMap(map);
						return true;
					}
					else {
						p.marker.setMap(null);
						return false;
					}
				}
				p.marker.setMap(map);
				return true;
			}
			else {
				p.marker.setMap(null);
				return false;
			}
        }));
	}, this);

	// Return if partial input string matches given category titles
	function categoryMatch(cs) {
		var match = false;
		cs.forEach(function(c){
			if( containsMatch(c.title) ) {
				match = true;
			}
		});
		return match;
	}

	// Return if partial input string matches given name (or title)
	function containsMatch(s) {
		var ls = s.toLowerCase();
		var li = (self.placesInput()).toLowerCase();
		if((ls).search(li) > -1) {
			return true;
		}
	}
 
    // Show/hide callbacks for the places list
    this.showPlace = function(p) {
		$(p).show()
	}
    this.hidePlace = function(p) {
		$(p).hide()
	}
}