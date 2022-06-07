const makePatron = ({name, tier = "Froggy Hero", element = "Fire"}) => {
	const patron = {name, tier, element}
	return patron
}

const froggyHeroes = [
	makePatron({name: "Flora Caulton", element: "Wood"}),
	makePatron({name: "Sebastian Andreasson", element: "Sand"}),
	makePatron({name: "Max Bittker", element: "Fire"}),
	makePatron({name: "@walpolea", element: "Air"}),
	makePatron({name: "Gill W", element: "Flower"}),
	makePatron({name: "Latchy", element: "Wood"}),
	makePatron({name: "Florent Loock", element: "Fire"}),
	makePatron({name: "George McGhee", element: "Fire"}),
	makePatron({name: "Dimitar Irinkov", element: "Fire"}),
	makePatron({name: "@poorsquid", element: "Leaf"}),
	makePatron({name: "The Saddest Biccy - A Pitiful Digestive", element: "Leaf"}),
	makePatron({name: "Magnogen", element: "Water"}),
	makePatron({name: "Chrysophlax", element: "Fire"}),
	makePatron({name: "SeungBum Kim", element: "Fire"}),
	makePatron({name: "Collo", element: "Fire"}),
	makePatron({name: "Andy Bayer", element: "Fire"}),
	makePatron({name: "Erik Jonasson", element: "Leaf"}),
	makePatron({name: "livcomp", element: "Poison"}),
	makePatron({name: "Hayden Jackson", element: "Fire"}),
	makePatron({name: "Brian Zindler", element: "Fire"}),
	makePatron({name: "antovsky", element: "Sand"}),
	makePatron({name: "Benjamin Mastripolito", element: "Sand"}),
	makePatron({name: "Patrick Kennedy", element: "Flower"}),
	makePatron({name: "Ax2u", element: "Poison"}),
	makePatron({name: "Filip Optołowicz"}),
	makePatron({name: "Matt Giallourakis"}),
	makePatron({name: "Willhart", element: "Wood"}),
	makePatron({name: "Maxence", element: "Air"}),
	makePatron({name: "Anton Little"}),
	makePatron({name: "stolksdorf", element: "Air"}),
	makePatron({name: "culi", element: "Leaf"}),
]