export const countries = { 
  india: {
    name: "India",
    states: {
      kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Kollam", "Thrissur", "Alappuzha", "Palakkad", "Kannur", "Malappuram", "Kottayam", "Pathanamthitta", "Idukki", "Wayanad", "Kasargod", "Varkala", "Muvattupuzha", "Neyyattinkara", "Punalur", "Chalakudy", "Manjeri"],
      tamil_nadu: ["Chennai", "Coimbatore", "Madurai", "Salem", "Erode", "Vellore", "Tiruppur", "Tirunelveli", "Trichy", "Thanjavur", "Cuddalore", "Kanchipuram", "Karaikudi", "Nagercoil", "Rajapalayam", "Dindigul", "Thoothukudi", "Tiruvannamalai", "Ambur", "Nagapattinam"],
      maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur", "Kolhapur", "Amravati", "Nanded", "Jalgaon", "Latur", "Ahmednagar", "Chandrapur", "Parbhani", "Dhule", "Beed", "Gondia", "Ratnagiri", "Sangli", "Wardha"],
      gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Navsari", "Surendranagar", "Anand", "Porbandar", "Godhra", "Palanpur", "Bharuch", "Mehsana", "Veraval", "Valsad", "Botad", "Amreli"],
      rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Alwar", "Bhilwara", "Sikar", "Pali", "Tonk", "Churu", "Hanumangarh", "Jhunjhunu", "Barmer", "Banswara", "Dausa", "Dungarpur", "Sawai Madhopur", "Nagaur"]
    }
  },
  usa: {
    name: "United States",
    states: {
      california: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San Jose", "Fresno", "Long Beach", "Oakland", "Bakersfield", "Anaheim", "Santa Ana", "Irvine", "Glendale", "Huntington Beach", "Stockton", "Chula Vista", "Fremont", "Modesto", "Santa Clarita", "Oxnard"],
      texas: ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", "El Paso", "Arlington", "Corpus Christi", "Plano", "Laredo", "Lubbock", "Garland", "Irving", "Amarillo", "Grand Prairie", "Brownsville", "McKinney", "Frisco", "Pasadena", "Killeen"],
      florida: ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Hialeah", "Tallahassee", "Fort Lauderdale", "Port St. Lucie", "Cape Coral", "Pembroke Pines", "Hollywood", "Miramar", "Gainesville", "Coral Springs", "Clearwater", "Palm Bay", "Lakeland", "Pompano Beach", "Miami Gardens"],
            new_york: ["New York", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany", "New Rochelle", "Mount Vernon", "Schenectady", "Utica", "White Plains", "Hempstead", "Troy", "Niagara Falls", "Binghamton", "Freeport", "Valley Stream", "Ithaca", "Kingston", "Peekskill"],
      illinois: ["Chicago", "Aurora", "Naperville", "Joliet", "Rockford", "Springfield", "Peoria", "Elgin", "Waukegan", "Cicero", "Champaign", "Bloomington", "Decatur", "Evanston", "Schaumburg", "Bolingbrook", "Palatine", "Skokie", "Des Plaines", "Orland Park"]
    }
  },
  canada: {
    name: "Canada",
    states: {
      ontario: ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton", "London", "Markham", "Vaughan", "Kitchener", "Windsor", "Richmond Hill", "Barrie", "Oshawa", "Guelph", "Sudbury", "Thunder Bay", "St. Catharines", "Kingston", "Niagara Falls", "Cambridge"],
      british_columbia: ["Vancouver", "Victoria", "Kelowna", "Abbotsford", "Nanaimo", "Kamloops", "Chilliwack", "Prince George", "Vernon", "Courtenay", "Penticton", "Campbell River", "Langford", "Fort St. John", "Port Moody", "White Rock", "Quesnel", "Nelson", "Cranbrook", "Terrace"],
      alberta: ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "St. Albert", "Medicine Hat", "Grande Prairie", "Airdrie", "Spruce Grove", "Leduc", "Fort McMurray", "Okotoks", "Cochrane", "Camrose", "Brooks", "Wetaskiwin", "Strathmore", "Lloydminster", "Beaumont", "Chestermere"],
      quebec: ["Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil", "Sherbrooke", "Saguenay", "Terrebonne", "Trois-Rivières", "Saint-Jean-sur-Richelieu", "Repentigny", "Brossard", "Drummondville", "Saint-Jérôme", "Granby", "Blainville", "Shawinigan", "Dollard-des-Ormeaux", "Rimouski", "Châteauguay"],
      manitoba: ["Winnipeg", "Brandon", "Steinbach", "Thompson", "Portage la Prairie", "Selkirk", "Winkler", "Dauphin", "Morden", "Flin Flon", "The Pas", "Stonewall", "Niverville", "Beausejour", "Swan River", "Neepawa", "Virden", "Altona", "Carberry", "Carman"]
    }
  },
  australia: {
    name: "Australia",
    states: {
      new_south_wales: ["Sydney", "Newcastle", "Wollongong", "Albury", "Maitland", "Tamworth", "Coffs Harbour", "Port Macquarie", "Dubbo", "Wagga Wagga", "Bathurst", "Lismore", "Goulburn", "Broken Hill", "Orange", "Nowra", "Griffith", "Armidale", "Grafton", "Taree"],
      victoria: ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Shepparton", "Mildura", "Warrnambool", "Wodonga", "Traralgon", "Wangaratta", "Sale", "Moe", "Horsham", "Colac", "Portland", "Echuca", "Swan Hill", "Bairnsdale", "Morwell", "Leongatha"],
      queensland: ["Brisbane", "Gold Coast", "Cairns", "Townsville", "Toowoomba", "Mackay", "Rockhampton", "Bundaberg", "Hervey Bay", "Gladstone", "Mount Isa", "Maryborough", "Gympie", "Yeppoon", "Warwick", "Dalby", "Emerald", "Biloela", "Innisfail", "Bowen"],
      south_australia: ["Adelaide", "Mount Gambier", "Whyalla", "Gawler", "Port Pirie", "Port Augusta", "Murray Bridge", "Victor Harbor", "Port Lincoln", "Kadina", "Berri", "Renmark", "Naracoorte", "Clare", "Tanunda", "Nuriootpa", "Loxton", "Moonta", "Wallaroo", "Millicent"],
      western_australia: ["Perth", "Fremantle", "Bunbury", "Albany", "Geraldton", "Kalgoorlie", "Busselton", "Esperance", "Mandurah", "Karratha", "Broome", "Port Hedland", "Northam", "Kwinana", "Margaret River", "Tom Price", "Collie", "Katanning", "Moora", "Wagin"]
    }
  },
  uk: {
    name: "United Kingdom",
    states: {
      england: ["London", "Birmingham", "Manchester", "Leeds", "Liverpool", "Sheffield", "Bristol", "Leicester", "Coventry", "Hull", "Newcastle", "Nottingham", "Stoke", "Plymouth", "Wolverhampton", "Derby", "Swansea", "Southampton", "Portsmouth", "Exeter"],
      scotland: ["Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Inverness", "Stirling", "Perth", "Ayr", "Dumfries", "Falkirk", "Kilmarnock", "Livingston", "Cumbernauld", "Kirkcaldy", "Elgin", "Greenock", "Hamilton", "Paisley", "Coatbridge", "Motherwell"],
      wales: ["Cardiff", "Swansea", "Newport", "Wrexham", "Bangor", "Aberystwyth", "Llandudno", "Bridgend", "Merthyr Tydfil", "Neath", "Port Talbot", "Pontypridd", "Rhyl", "Barry", "Cwmbran", "Colwyn Bay", "Caerphilly", "Llanelli", "Ebbw Vale", "Carmarthen"],
      northern_ireland: ["Belfast", "Londonderry", "Lisburn", "Newtownabbey", "Bangor", "Craigavon", "Newtownards", "Carrickfergus", "Antrim", "Armagh", "Coleraine", "Downpatrick", "Enniskillen", "Larne", "Limavady", "Magherafelt", "Newry", "Omagh", "Strabane", "Ballymena"],
      isle_of_man: ["Douglas", "Ramsey", "Peel", "Castletown", "Port Erin"]
    }
  },
  germany: {
    name: "Germany",
    states: {
      bavaria: ["Munich", "Nuremberg", "Augsburg", "Regensburg", "Ingolstadt", "Würzburg", "Erlangen", "Bayreuth", "Bamberg", "Landshut", "Aschaffenburg", "Amberg", "Coburg", "Kempten", "Schweinfurt", "Rosenheim", "Passau", "Freising", "Neu-Ulm", "Weiden"],
      berlin: ["Berlin"],  
      hesse: ["Frankfurt", "Wiesbaden", "Kassel", "Darmstadt", "Offenbach", "Hanau", "Gießen", "Fulda", "Rüsselsheim", "Bad Homburg", "Marburg", "Limburg", "Wetzlar", "Dreieich", "Heppenheim", "Eschwege", "Groß-Gerau", "Korbach", "Bensheim", "Friedberg"],
      saxony: ["Dresden", "Leipzig", "Chemnitz", "Zwickau", "Plauen", "Görlitz", "Freiberg", "Riesa", "Pirna", "Bautzen", "Hoyerswerda", "Meerane", "Torgau", "Coswig", "Döbeln", "Annaberg-Buchholz", "Weißwasser", "Grimma", "Sebnitz", "Eilenburg"],
      north_rhine_westphalia: ["Cologne", "Düsseldorf", "Dortmund", "Essen", "Bonn", "Wuppertal", "Bielefeld", "Bochum", "Gelsenkirchen", "Aachen", "Münster", "Krefeld", "Oberhausen", "Hagen", "Hamm", "Mülheim", "Herne", "Solingen", "Leverkusen", "Siegen"]
    }
  },
  france: {
    name: "France",
    states: {
      ile_de_france: ["Paris", "Boulogne-Billancourt", "Saint-Denis", "Argenteuil", "Montreuil", "Nanterre", "Vitry-sur-Seine", "Créteil", "Asnières-sur-Seine", "Versailles", "Courbevoie", "Colombes", "Aulnay-sous-Bois", "Rueil-Malmaison", "Champigny-sur-Marne", "Antony", "Noisy-le-Grand", "Levallois-Perret", "Clamart", "Meaux"],
      provence: ["Marseille", "Nice", "Toulon", "Aix-en-Provence", "Avignon", "Cannes", "Antibes", "La Seyne-sur-Mer", "Fréjus", "Hyères", "Salon-de-Provence", "Arles", "Grasse", "Martigues", "Draguignan", "Istres", "Vitrolles", "Aubagne", "Cavaillon", "Manosque"],
      brittany: ["Rennes", "Brest", "Quimper", "Lorient", "Vannes", "Saint-Malo", "Saint-Brieuc", "Lannion", "Fougères", "Morlaix", "Douarnenez", "Concarneau", "Redon", "Ploemeur", "Pontivy", "Auray", "Lamballe", "Dinan", "Guingamp", "Auray"],
      alsace: ["Strasbourg", "Mulhouse", "Colmar", "Haguenau", "Schiltigheim", "Illkirch", "Sélestat", "Saverne", "Obernai", "Wissembourg", "Brumath", "Bischwiller", "Lingolsheim", "Erstein", "Molsheim", "Guebwiller", "Saint-Louis", "Ribeauvillé", "Rosheim", "Thann"],
      normandy: ["Rouen", "Le Havre", "Caen", "Cherbourg", "Alençon", "Dieppe", "Evreux", "Lisieux", "Granville", "Flers", "Vire", "Fécamp", "L’Aigle", "Argentan", "Bayeux", "Pont-Audemer", "Elbeuf", "Vernon", "Barentin", "Valognes"]
    }
  } };
  
export const bgColors = [  "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5",
  "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50",
  "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800",
  "#ff5722", "#795548", "#607d8b", "#b71c1c", "#1b5e20" ];