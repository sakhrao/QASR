// QASR — Algerian Wilaya & Municipality Data
// Complete dataset for the checkout delivery form

const wilayaData = [
  {
    id: 1, name: "Adrar", nameAr: "أدرار",
    municipalities: ["Adrar", "Bouda", "Ouled Ahmed", "Tamekten", "Tamest", "Zaouiet Kounta", "Reggane", "Sali", "Sebaa", "Tsabit", "Fenoughil", "Aoulef", "Timekten", "Akabli", "In Zghmir", "Tit"]
  },
  {
    id: 2, name: "Chlef", nameAr: "الشلف",
    municipalities: ["Chlef", "Tenes", "Beni Haoua", "Ouled Fares", "Ouled Ben Abdelkader", "Bouzeghaia", "Abou El Hassan", "Talassa", "Taougrit", "Oum Drou", "Sendjas", "Oued Fodda", "Chettia", "Herenfa", "Beni Rached", "El Hadjadj", "Ouled Abbes", "Zeboudja", "El Marsa", "Ain Merane", "Sobha", "Harchoun", "Kostia", "Dahra", "Labiod Medjadja", "Moussadek", "Tadjena", "Oued Goussine"]
  },
  {
    id: 3, name: "Laghouat", nameAr: "الأغواط",
    municipalities: ["Laghouat", "Kheneg", "Tadjemout", "El Ghicha", "Ain Madhi", "Hassi Delaa", "Sidi Makhlouf", "Sidi Bouzid", "Kasr El Hirane", "Tadjrouna", "El Assafia", "Oued Morra", "Ain Sidi Ali", "Beidha", "Brida", "El Haouaita"]
  },
  {
    id: 4, name: "Oum El Bouaghi", nameAr: "أم البواقي",
    municipalities: ["Oum El Bouaghi", "Ain Beida", "Ain M'lila", "Khenchela", "El Amiria", "Fkirina", "Ain Barka", "Ain Fekroun", "Ain Kercha", "Ain Zitoun", "Behir Chergui", "Berriche", "Bir Chouhada", "Dhalaa", "El Beida", "El Fedjoudj", "El Rahia", "Hanchir Toumghani", "Ksar Sbahi", "Meskiana", "Ouled Hamla", "Ouled Zouai", "Rahbat", "Souk Naamane", "Zorg"]
  },
  {
    id: 5, name: "Batna", nameAr: "باتنة",
    municipalities: ["Batna", "Tazoult", "Ain Yagout", "Boulhilat", "Chemora", "Fesdis", "Ksar Bellezma", "Merouana", "Oued Chaaba", "Oued Ma", "Seggana", "Seriana", "Talking", "Tigherghar", "Zanet El Beida", "Ain Djasser", "Ain Touta", "Beni Fouda", "Boumagueur", "Bouzina", "Djerma", "El Hassi", "El Madher", "Ghoufi", "Hidoussa", "Ichmoul", "Inoughissen", "Lazrou", "Menaa", "N'Gaous", "Oued Taga", "Ouled Aouf", "Ouled Fadel", "Ouled Sellam", "Ouled Si Slimane", "Ras El Aioun", "Teniet El Abed", "Tighanimine", "Tilatou", "Timgad", "Yabous"]
  },
  {
    id: 6, name: "Béjaïa", nameAr: "بجاية",
    municipalities: ["Bejaia", "Amizour", "Adekar", "Akbou", "Bechloul", "Beni Djellil", "Beni Ksila", "Beni Maouche", "Beni Smiel", "Boudjellil", "Bouhamza", "Chemini", "Darguina", "El Flaye", "El Kseur", "Feraoun", "Ighil Ali", "Kendira", "Kherrata", "M'cisna", "Melbou", "Oued Ghir", "Seddouk", "Sidi Ayad", "Sidi Aich", "Smaoun", "Souk El Tenine", "Tazmalt", "Tibane", "Tichy", "Tifra", "Tinebdar", "Toudja", "Tala Hamza", "Taskriout", "Barbacha", "Leflaye"]
  },
  {
    id: 7, name: "Biskra", nameAr: "بسكرة",
    municipalities: ["Biskra", "Ain Zaatout", "Ain Naga", "Bouchagroune", "Chetma", "Djemorah", "El Feidh", "El Ghrous", "El Hadjeb", "El Kantara", "El Outaya", "Foughala", "Lichana", "Lioua", "M'chouneche", "Ouled Djellal", "Oumache", "Sidi Khaled", "Sidi Okba", "Tolga", "Zeribet El Oued", "Mekhadma", "Branis", "Ourlal", "M'ziraa"]
  },
  {
    id: 8, name: "Béchar", nameAr: "بشار",
    municipalities: ["Bechar", "Abadla", "Beni Ounif", "Boukais", "El OUED", "Erg Ferradj", "Igli", "Kenadsa", "Kerzaz", "Lahmar", "Machraa Houari", "Meridja", "Mogheul", "Ouled Khoudir", "Tabelbala", "Taghit", "Tamtert", "Timiaouine", "Tsabit"]
  },
  {
    id: 9, name: "Blida", nameAr: "البليدة",
    municipalities: ["Blida", "Boufarik", "Beni Tamou", "Beni Mered", "Bougara", "Bouinan", "Chebli", "Chiffa", "Chrea", "Djebabra", "El Affroun", "Guerrouaou", "Hammam Elouane", "Larbaa", "Meftah", "Mouzaia", "Oued Alleug", "Oued Djer", "Ouled Slama", "Ouled Yaich", "Souhane", "Soumaa"]
  },
  {
    id: 10, name: "Bouira", nameAr: "البويرة",
    municipalities: ["Bouira", "Ain Bessem", "Aghbalou", "Ain El Hadjar", "Ahl El Ksar", "Ain Laloui", "Ain Turk", "Ain Zaouia", "Behloul", "Bir Ghbalou", "Bordj Okhriss", "Bouderbala", "Chorfa", "Dechmia", "Dirah", "Djebahia", "El Adjiba", "El Asnam", "El Hakimia", "El Kadia", "El Mokrani", "Guerrouma", "Haizer", "Hanif", "Kadiria", "Lakhdaria", "Maala", "Mechda", "Mezdour", "Oued El Berdi", "Ouled Brahim", "Ouled Rached", "Ouled Sidi Brahim", "Raouraoua", "Ridane", "Saharidj", "Souk El Khemis", "Sour El Ghozlane", "Taghzout", "Zbarbar", "Zeggouta", "El Hachimia"]
  },
  {
    id: 11, name: "Tamanrasset", nameAr: "تمنراست",
    municipalities: ["Tamanrasset", "Abalessa", "Idlès", "In Amguel", "In Ghar", "Tazrouk", "Tin Zaouatine", "Ain Guezzam", "Ain Salah", "Foggaret Ezzoua", "Silet"]
  },
  {
    id: 12, name: "Tébessa", nameAr: "تبسة",
    municipalities: ["Tebessa", "Ain Zerga", "Bekkaria", "Bir Dheb", "Bou Khadra", "Boulhaf Dhyr", "Cheria", "El Aouinet", "El Hammamet", "El Houidjebet", "El Kouif", "El Ma Labiodh", "El Mezraa", "El Ogla", "Ferkane", "Guorriguer", "Hammamet", "Morsott", "Negrine", "Ouenza", "Oued Souk", "Oum Ali", "Saf El Ouidane", "Sidi Aich", "Stah Guentis", "Telidjen", "Tlidjen"]
  },
  {
    id: 13, name: "Tlemcen", nameAr: "تلمسان",
    municipalities: ["Tlemcen", "Ain Fezza", "Ain Ghoraba", "Ain Kebira", "Ain Nehala", "Ain Tellout", "Amieur", "Bab El Assa", "Beni Bahdel", "Beni Boussaid", "Beni Mester", "Beni Ouarsous", "Beni Snous", "Beni Smiel", "Bensekrane", "Bouhlou", "Chetouane", "Dar Yaghmouracene", "Djebala", "El Aricha", "El Bouihi", "El Fehoul", "El Gor", "Fellaoucene", "Ghazaouet", "Hammam Boughrara", "Hennaya", "Honaine", "Maghnia", "Mansourah", "Marsa Ben M'hidi", "M'sirda Fouaga", "Nedroma", "Oued Lakhdar", "Ouled Mimoun", "Ouled Riyah", "Remchi", "Sabra", "Sebaa Chioukh", "Sidi Abdelli", "Sidi Djilali", "Sidi Medjahed", "Souahlia", "Souk Tlata", "Terny Beni Hediel", "Tianet", "Zenata"]
  },
  {
    id: 14, name: "Tiaret", nameAr: "تيارت",
    municipalities: ["Tiaret", "Ain Bouchekif", "Ain Deheb", "Ain Dzarit", "Ain El Hadid", "Ain Kermes", "Bougara", "Chehaima", "Dahmouni", "Djebilet Rosfa", "Djillali Ben Amar", "Faidja", "Frenda", "Guertoufa", "Hamadia", "Ksar Chellala", "Lardjem", "M'sila", "Mechraa Safa", "Medroussa", "Meghila", "Mellakou", "Nadorah", "Naima", "Oued Lilli", "Rahouia", "Rebai", "Sebaain", "Sebt", "Sidi Abderrahmane", "Sidi Ali Mellal", "Sidi Bakhti", "Sidi Hosni", "Sougueur", "Taghzout", "Takhemaret", "Tousnina", "Zmalet El Emir Abdelkader"]
  },
  {
    id: 15, name: "Tizi Ouzou", nameAr: "تيزي وزو",
    municipalities: ["Tizi Ouzou", "Aghribs", "Ain El Hammam", "Ain Zaouia", "Ait Aggouacha", "Ait Bouadou", "Ait Bouyahia", "Ait Chafaa", "Ait Khelifa", "Ait Mahmoud", "Ait Oumalou", "Ait Toudert", "Ait Yahia", "Ait Yenni", "Akbil", "Akerrou", "Assi Youcef", "Azazga", "Azeffoun", "Beni Aissi", "Beni Bou Said", "Beni Douala", "Beni Yenni", "Beni Zekki", "Beni Zmenzer", "Boghni", "Boudjima", "Bounouh", "Bouzeguene", "Draa Ben Khedda", "Draa El Mizan", "Freha", "Frikat", "Iboudrarene", "Idjeur", "Iferhounene", "Ifigha", "Iflisen", "Illilten", "Illoula Oumalou", "Imsouhel", "Irdjen", "Larbaa Nath Irathen", "Maatkas", "Makouda", "Mechtras", "Mekla", "Mizrana", "M'kira", "Ouacif", "Ouadhia", "Ouaguenoun", "Ouaghzen", "Sidi Belloua", "Sidi Namane", "Souama", "Souk El Had", "Tadmait", "Tassadort", "Tizi Gheniff", "Tizi Rached", "Yakouren", "Yatafen", "Zekri", "Boudjima"]
  },
  {
    id: 16, name: "Algiers", nameAr: "الجزائر",
    municipalities: ["Alger Centre", "Bab El Oued", "Baraki", "Bir Mourad Rais", "Birkhadem", "Bologhine", "Bordj El Kiffan", "Bourouba", "Casbah", "Cheraga", "Dar El Beida", "Dely Ibrahim", "El Achour", "El Biar", "El Harrach", "El Madania", "Hammamet", "Hussein Dey", "Hydra", "Kouba", "Mohamed Belouizdad", "Mohammadia", "Oued Koriche", "Oued Smar", "Rais Hamidou", "Rouiba", "Sidi M'hamed", "Staoueli", "Zeralda", "Ain Benian", "Ain Taya", "Bab Ezzouar", "Baba Hassen", "Ben Aknoun", "Beni Messous", "Birtouta", "Bordj El Bahri", "Chlef", "Djasr Kasentina", "Douera", "Draria", "El Magharia", "El Mouradia", "Eucalyptus", "Gue de Constantine", "Hai El Djahia", "Khelifate", "Les Eucalyptus", "Mahelma", "Ouled Chebel", "Ouled Fayet", "Rahmania", "Reghaia", "Saoula", "Sidi Moussa", "Souidania", "Tessala El Merdja"]
  },
  {
    id: 17, name: "Djelfa", nameAr: "الجلفة",
    municipalities: ["Djelfa", "Ain Chouhada", "Ain El Ibel", "Ain Fekka", "Ain Maabed", "Ain Oussera", "Amira", "Baarain", "Beni Yagoub", "Birine", "Bouira Lahdab", "Charef", "Dar Chouikh", "Deldoul", "Douis", "El Guedid", "El Idrissia", "El Khemis", "Faidh El Botma", "Guernini", "Guettara", "Had Sahary", "Hassi Bahbah", "Hassi El Euch", "M'liliha", "Mouadjebara", "Oum Laadham", "Sed Rahal", "Selmana", "Sidi Baizid", "Sidi Ladjel", "Tadmit", "Zaafrane", "Zaccar", "Zemlet El Djebel"]
  },
  {
    id: 18, name: "Jijel", nameAr: "جيجل",
    municipalities: ["Jijel", "Boudria Beni Yadjis", "Bouraoui Belhadef", "Chekfa", "Djemaa Beni Habibi", "El Ancer", "El Aouana", "El Milia", "Emnacif", "Erraguene", "Kaous", "Khiri Oued Adjoul", "Oued Adjoul", "Ouled Rabah", "Ouled Yahia Khedrouche", "Selma Benziada", "Settara", "Sidi Maamar", "Taher", "Texenna", "Ziama Mansouriah", "Ghebala", "Boussif", "Bouchene"]
  },
  {
    id: 19, name: "Sétif", nameAr: "سطيف",
    municipalities: ["Setif", "Ain Abessa", "Ain Arnat", "Ain Lahdjar", "Ain Oulmene", "Ain Roua", "Ain Azel", "Ain El Kebira", "Ain Legradj", "Ain Sebt", "Amoucha", "Babor", "Bazer Sakhra", "Beida Bordj", "Belaa", "Beni Aziz", "Beni Chebana", "Beni Fouda", "Beni Hocine", "Beni Mouhli", "Beni Ourtilane", "Bir El Arch", "Bouandas", "Bousselam", "Djamilab", "Draa Kebila", "El Eulma", "El Ouldja", "Fellaoucene", "Guelta Zerka", "Guidjel", "Hamma", "Harbil", "Kasr El Abtal", "Maaouia", "Mezeguem", "Oued El Barad", "Ouled Addouane", "Ouled Sabor", "Ouled Si Ahmed", "Rosfa", "Salah Bey", "Serdj El Ghoul", "Tachouda", "Talaifacene", "Taya", "Tella", "Tizi N'Bechar", "Zeribet El Kedem", "Guenzet"]
  },
  {
    id: 20, name: "Saïda", nameAr: "سعيدة",
    municipalities: ["Saida", "Ain El Hadjar", "Ain Sekhouna", "Ain Soltane", "Doui Thabet", "El Hassasna", "Hounet", "Maamora", "Sidi Ahmed", "Sidi Amar", "Sidi Boubekeur", "Tircine", "Zerouala", "Ouled Brahim", "Moulay Larbi"]
  },
  {
    id: 21, name: "Skikda", nameAr: "سكيكدة",
    municipalities: ["Skikda", "Ain Bouziane", "Ain Charchar", "Ain Kechra", "Ain Zouit", "Azzaba", "Bekkouche Lakhdar", "Ben Azzouz", "Beni Oulbane", "Beni Zid", "Bin El Ouiden", "Bouchetata", "Cheraia", "Collo", "Djendel Saadi Mohamed", "El Arrouch", "El Ghedir", "El Haddada", "El Kantara", "Emjez Edchich", "Erraguene", "Es Sebt", "Filfila", "Hamadi Kroma", "Kani Zaz", "Kerkera", "M'djedj", "Oued El Arbi", "Ouled Attia", "Ouled Habbaba", "Oum Tobel", "Ramdane Djamel", "Salah Bouchaour", "Sidi Mezghiche", "Tamalous", "Zitouna", "Zerdezas", "Sougueur"]
  },
  {
    id: 22, name: "Sidi Bel Abbès", nameAr: "سيدي بلعباس",
    municipalities: ["Sidi Bel Abbes", "Ain Adden", "Ain El Berd", "Ain Kada", "Ain Thrid", "Ain Tindamine", "Amarnas", "Badredine El Mokrani", "Belarbi", "Beni Badis", "Beni M'ter", "Boukanefis", "Boukhari", "Chabaith", "Cherif", "Dhaya", "El Hacaiba", "Hassi Daho", "Hassi Zehana", "Lamor", "M'cid", "Makedra", "Marhoum", "Merine", "Mezaourou", "Mograne", "Moulay Slissen", "Oued Sebaa", "Oued Sefioun", "Oued Taourira", "Ras El Ma", "Redjem Demouche", "Sehala Thaoura", "Sfisef", "Sidi Ali Benyoub", "Sidi Ali Boussidi", "Sidi Belattar", "Sidi Brahim", "Sidi Chaib", "Sidi Dahou", "Sidi Hamadouche", "Sidi Khaled", "Sidi Lahcene", "Sidi Yacoub", "Tabia", "Tafissour", "Taoudmout", "Teghalimet", "Zerouala"]
  },
  {
    id: 23, name: "Annaba", nameAr: "عنابة",
    municipalities: ["Annaba", "El Hadjar", "Berrahal", "Sidi Amar", "Cheurfa", "El Bouni", "Oued El Aneb", "Treat", "Bled Youssef", "Seikha"]
  },
  {
    id: 24, name: "Guelma", nameAr: "قالمة",
    municipalities: ["Guelma", "Ain Ben Beida", "Ain Ben Lahdjar", "Ain Larbi", "Ain Makhlouf", "Ain Regada", "Ain Sandel", "Belkheir", "Ben Djerrah", "Beni Mezline", "Bordj Sabat", "Bouati Mahmoud", "Bouhamdane", "Bouchegouf", "Boumahra Ahmed", "Dahouara", "Djeballah Khemissi", "El Fedjoudj", "Guelaat Bou Sbaa", "Hammam Debagh", "Hammam N'bail", "Haqsas", "Helaia", "Houari Boumedienne", "Khezarra", "Medjez Amar", "Medjez Sfa", "N'gaous", "Oued Cheham", "Oued Ferragha", "Oued Zenati", "Ras El Agba", "Roknia", "Sellaoua Announa", "Tamazira", "Taya"]
  },
  {
    id: 25, name: "Constantine", nameAr: "قسنطينة",
    municipalities: ["Constantine", "Ain Abid", "Ain Smara", "Beni Hamidane", "Didouche Mourad", "El Khroub", "Hamma Bouziane", "Ibn Ziad", "Messaoud Boudjeriou", "Ouled Rahmoune", "Zighoud Youcef", "Ain Ainouche", "Beni Aiche"]
  },
  {
    id: 26, name: "Médéa", nameAr: "المدية",
    municipalities: ["Medea", "Ain Boucif", "Ain Ouksir", "Aissaouia", "Aziz", "Baata", "Beni Slimane", "Berrouaghia", "Boghar", "Bouchrahil", "Boumedfaa", "Bouaichoune", "Chablat", "Chelalet El Adhaoura", "Cheniguel", "Damiat", "Derrag", "Djouab", "Draa Essamar", "El Azizia", "El Guelbelkebir", "El Hamdania", "El Omaria", "El Ouinet", "Hannacha", "Kef Lakhdar", "Ksar El Boukhari", "Larbaa", "M'fatha", "Medjebar", "Mezerana", "Mihoub", "Naama", "Oued Harbil", "Ouled Antar", "Ouled Bouachra", "Ouled Brahim", "Ouled Daeid", "Ouled Hellal", "Ouled Maaref", "Ouzera", "Rebaia", "Saneg", "Sedraya", "Seghouane", "Si Mahdjoub", "Sidi Damed", "Sidi Naamane", "Sidi Rabat", "Sidi Ziane", "Souagui", "Tablat", "Tafraout", "Tamesguida", "Tizi Mahdi", "Tlet El Edaime", "Zoubiria"]
  },
  {
    id: 27, name: "Mostaganem", nameAr: "مستغانم",
    municipalities: ["Mostaganem", "Abdelmalek Ramdane", "Achaacha", "Ain Boudinar", "Ain Nouissy", "Ain Sidi Cherif", "Ain Tades", "Bouguirat", "El Hassiane", "Fornaka", "Hadjadj", "Hassiene", "Kheireddine", "Mansourah", "Mesra", "Mazagran", "Nekmaria", "Oued El Kheir", "Ouled Maalah", "Ouled Boughalem", "Safsaf", "Sayada", "Sidi Ali", "Sidi Belattar", "Sidi Lakhdar", "Sirat", "Souaflia", "Stidia", "Tazgait", "Touahtia", "Yellel"]
  },
  {
    id: 28, name: "M'Sila", nameAr: "المسيلة",
    municipalities: ["M'sila", "Ain El Hadjel", "Ain El Melh", "Ain Fares", "Ain Khadra", "Ain Rich", "Belaiba", "Beni Ilmane", "Benzouh", "Berhoum", "Bir Fodda", "Bordj Bou Naama", "Bordj Emir Abdelkader", "Bou Saada", "Bouti Sayeh", "Chellal", "Dehahna", "Djebel Msissa", "Djebel Aissa", "Gouhiet", "Hammam Dalaa", "Khottouti Sid El Djir", "M'cif", "M'ghar", "Maatouf", "Maadid", "Medjedel", "Ouanougha", "Ouled Addi Guebala", "Ouled Derradj", "Ouled Madhi", "Ouled Sidi Brahim", "Rachedia", "Sidi Aissa", "Sidi Hadjeres", "Sidi M'hamed", "Slim", "Souamaa", "Tarmount", "Touta", "Zarzour"]
  },
  {
    id: 29, name: "Mascara", nameAr: "معسكر",
    municipalities: ["Mascara", "Ain Fares", "Ain Ferah", "Ain Fekan", "Alaimia", "Aouf", "Beniane", "Bouhanifia", "Chellala", "El Bordj", "El Gouara", "El Gueitna", "El Keurt", "El Menaouer", "Froha", "Gharrous", "Ghriss", "Hacine", "Khalouia", "Makhada", "Maoussa", "Mamounia", "Matemore", "Moaskar", "Nesmoth", "Oggaz", "Oued El Abtal", "Oued Taria", "Ras El Ain Amirouche", "Sedjerara", "Sehailia", "Sidi Abdeldjebar", "Sidi Abdelmoumene", "Sidi Boussaid", "Sidi Kada", "Sig", "Tighennif", "Tizi", "Zahana", "Zelamta"]
  },
  {
    id: 30, name: "Ouargla", nameAr: "ورقلة",
    municipalities: ["Ouargla", "Ain Beida", "El Borma", "Hassi Messaoud", "N'goussa", "Rouissat", "Sidi Khouiled", "Tadjemti", "Temacine", "Touggourt", "Benaceur", "Bilda", "El Alia", "El Hadjira", "Megarine", "M'naguer", "Nezla", "Taibet", "Tebesbest", "Zaouia El Abidia", "Tamellaht"]
  },
  {
    id: 31, name: "Oran", nameAr: "وهران",
    municipalities: ["Oran", "Ain Biya", "Ain El Kerma", "Ain El Turk", "Arzew", "Ben Freha", "Bir El Djir", "Boufatis", "Bousfer", "Boutlelis", "Dellys", "El Ançor", "El Kerma", "Es Senia", "Gdyel", "Hassi Bounif", "Hassi Ben Okba", "Hassi Mefsoukh", "Marsat El Hadjadj", "Mers El Kebir", "Misserghin", "Oued Tlelat", "Sidi Benyebka", "Sidi Chami", "Tafaraoui", "Tlelat"]
  },
  {
    id: 32, name: "El Bayadh", nameAr: "البيض",
    municipalities: ["El Bayadh", "Boualem", "Bougtoub", "Boussemghoun", "Brezina", "Cheguig", "Chellala", "El Abiodh Sidi Cheikh", "El Bnoud", "El Kheither", "El Maharra", "Ghassoul", "Kef El Ahmar", "Krakda", "M'lili", "Rogassa", "Sidi Ameur", "Sidi Slimane", "Sidi Tifour", "Stitten", "Tousmouline"]
  },
  {
    id: 33, name: "Illizi", nameAr: "إليزي",
    municipalities: ["Illizi", "Bordj Omar Driss", "Debdeb", "Djanet", "In Amenas", "Iherir", "Tassili"]
  },
  {
    id: 34, name: "Bordj Bou Arréridj", nameAr: "برج بوعريريج",
    municipalities: ["Bordj Bou Arreridj", "Ain Taghrout", "Ain Tesra", "Belimour", "Ben Daoud", "Bir Kasdali", "Bordj Ghedir", "Bordj Zemoura", "Colla", "Djaafra", "El Achir", "El Annasser", "El Euch", "El Hamadia", "El Main", "El M'hir", "Ghailasa", "Haraza", "Hasnaoua", "Ksour", "Mansoura", "Medjana", "Ouled Brahem", "Ouled Dahmane", "Ouled Sidi Brahim", "Rabta", "Ras El Oued", "Sidi Embarek", "Tafreg", "Taglait", "Teniet En Nasr", "Tixter", "Zemmoura"]
  },
  {
    id: 35, name: "Boumerdès", nameAr: "بومرداس",
    municipalities: ["Boumerdes", "Afir", "Baghlia", "Ben Choud", "Beni Amrane", "Bordj Menaiel", "Boudouaou", "Boudouaou El Bahri", "Bouzegza", "Chabet El Ameur", "Corso", "Dellys", "Djinet", "El Kharrouba", "Hammedi", "Isser", "Khemis El Khechna", "Larbatache", "Leghata", "Naciria", "Ouled Aissa", "Ouled Hedadj", "Ouled Moussa", "Si Mustapha", "Sidi Daoud", "Souk El Had", "Taourga", "Thenia", "Tidjelabine", "Timezrit", "Zemmouri"]
  },
  {
    id: 36, name: "El Tarf", nameAr: "الطارف",
    municipalities: ["El Tarf", "Ain El Assel", "Ain Kerma", "Asfour", "Ben M'hidi", "Berrihane", "Besbes", "Bougous", "Bouhadjar", "Bouteldja", "Chebaita Mokhtar", "Cheffia", "Chihani", "Drean", "El Aioun", "El Kala", "Hanencha", "H'ass", "Oued Zitoun", "Raml Souk", "Sabritha", "Sidi Kassi", "Sougueur", "Zitouna"]
  },
  {
    id: 37, name: "Tindouf", nameAr: "تندوف",
    municipalities: ["Tindouf", "Oum El Assel"]
  },
  {
    id: 38, name: "Tissemsilt", nameAr: "تسمسيلت",
    municipalities: ["Tissemsilt", "Ammari", "Beni Chaib", "Beni Lahcene", "Boucaid", "Bordj Bounaama", "Bordj El Emir Abdelkader", "Larbaa", "Lardjem", "Layoune", "Melaab", "Ouled Bessem", "Sidi Abed", "Sidi Boutouchent", "Sidi Lantri", "Sidi Slimane", "Tamalaht", "Theniet El Had", "Yousoufia", "Tissemsilt Centre"]
  },
  {
    id: 39, name: "El Oued", nameAr: "الوادي",
    municipalities: ["El Oued", "Bayadha", "Debila", "Douar El Ma", "El M'ghair", "Guemar", "Hamraia", "Hassi Khalifa", "Magrane", "Mih Ouensa", "Nakhla", "Oued El Alenda", "Ourmas", "Reguiba", "Robbah", "Sidi Aoun", "Taghzout", "Taleb Larbi", "Tenedla", "Trifaoui", "Beni Guecha", "Djamâa", "El Ogla", "Kouinine", "M'zad", "Still"]
  },
  {
    id: 40, name: "Khenchela", nameAr: "خنشلة",
    municipalities: ["Khenchela", "Ain Touila", "Bouhmama", "Chelia", "Ensigha", "Fkirina", "Kais", "Khenchela", "M'toussa", "Ouled Aouf", "Ouled M'hammed", "Ouled Rechache", "Remila", "Siai", "Sidi Abid", "Taouzient", "Yabous", "Zabar", "El Hamma"]
  },
  {
    id: 41, name: "Souk Ahras", nameAr: "سوق أهراس",
    municipalities: ["Souk Ahras", "Ain Zana", "Ain Soltane", "Bir Bouhouche", "Drea", "Haddada", "Hanencha", "Khemissa", "Madar", "Mechroha", "Merahna", "Ouled Driss", "Ouled Moumen", "Oum Lakhfate", "Ragouba", "Safel El Ouiden", "Sidi Fredj", "Sidi Younes", "Touiref", "Zaarouria", "Zouabi"]
  },
  {
    id: 42, name: "Tipaza", nameAr: "تيبازة",
    municipalities: ["Tipaza", "Ain Tagourait", "Attatba", "Beni Milleuk", "Bou Ismail", "Bouharoun", "Chaiba", "Cherchell", "Damous", "Douaouda", "Fouka", "Gouraya", "Hadjout", "Kolea", "Larhat", "Menaceur", "Merad", "Nador", "Sidi Amar", "Sidi Ghiles", "Sidi Rached", "Sidi Semiane"]
  },
  {
    id: 43, name: "Mila", nameAr: "ميلة",
    municipalities: ["Mila", "Ahmed Rachedi", "Ain Beida Harriche", "Ain Mellouk", "Ain Tine", "Amira Douala", "Beni Hamouda", "Benyahia Abderrahmane", "Bouchakor", "Chelghoum Laid", "Chigara", "Derradji Bousselah", "El Mechira", "El Ouadel", "El Yahia Beni Guech", "Ferdjioua", "Grarem Gouga", "Hamala", "M'chira", "Minar Zarza", "Oued Athmania", "Oued Endja", "Oued Seguen", "Ouled Hamida", "Ouled Khalouf", "Rouached", "Sidi Khelifa", "Sidi Merouane", "Tadjenanet", "Tassadane Haddada", "Telerghma", "Tiberguent", "Zeghaia", "Zghaya"]
  },
  {
    id: 44, name: "Aïn Defla", nameAr: "عين الدفلى",
    municipalities: ["Ain Defla", "Ain Benian", "Ain Bouyahia", "Ain Lechiakh", "Ain Soltane", "Ain Torki", "Bathia", "Belaas", "Ben Allal", "Bir Ouled Khelifa", "Bordj Emir Khaled", "Boumedfaa", "Bourached", "Djelida", "Djemaa Ouled Cheikh", "El Abadia", "El Amra", "El Attaf", "El Hassania", "El Main", "Hammam Righa", "Hoceinia", "Khemis Miliana", "Mekhatria", "Miliana", "Oued Chorfa", "Oued Djemaa", "Rouina", "Sidi Lakhdar", "Tacheta Zougagha", "Tarik Ibn Ziad", "Tiberkanine", "Zeddine"]
  },
  {
    id: 45, name: "Naâma", nameAr: "النعامة",
    municipalities: ["Naama", "Ain Ben Khelil", "Ain Sefra", "Assela", "Bouayache", "Boufatis", "El Biod", "Kasdir", "Mecheria", "Moghrar", "Sfissifa", "Tiout", "Tirkount"]
  },
  {
    id: 46, name: "Aïn Témouchent", nameAr: "عين تموشنت",
    municipalities: ["Ain Temouchent", "Aghlal", "Ain El Arbaa", "Ain Kihal", "Ain Tolba", "Aoubellil", "Beni Saf", "Bouzedjar", "Chaabat El Ham", "Chellal", "El Amria", "El Emir Abdelkader", "El Malah", "El Messaid", "Hammam Bouhadjar", "Hassasna", "Hassi El Ghella", "Oued Sabah", "Ouled Boudjemaa", "Ouled Kihal", "Oulha", "Sidi Ben Adda", "Sidi Boumediene", "Sidi Safi", "Tamzoura", "Terga", "Tianet"]
  },
  {
    id: 47, name: "Ghardaïa", nameAr: "غرداية",
    municipalities: ["Ghardaia", "Beni Isguen", "Bou Noura", "Dhayet Bendhahoua", "El Atteuf", "El Guerrara", "Hassi Fehal", "Hassi Lefhal", "Mansoura", "Metlili", "Sebseb", "Zelfana"]
  },
  {
    id: 48, name: "Relizane", nameAr: "غليزان",
    municipalities: ["Relizane", "Ain Rahma", "Ain Tarik", "Ammi Moussa", "Belassel Bouzegza", "Bendaoud", "Beni Dergoun", "Beni Zentis", "Dar Ben Abdellah", "Djidiouia", "El Guettar", "El Hamadna", "El Hassi", "El Matmar", "El Ouldja", "Had Echkalla", "Hamri", "Kalaa", "Lahlef", "Mazouna", "Mediouna", "Mendes", "Merdja Sidi Abed", "Ouarizane", "Oued El Djemaa", "Oued Essalem", "Oued Rhious", "Ouled Aiche", "Ouled El Melha", "Ramka", "Sidi Khettab", "Sidi M'hamed Ben Ali", "Sidi Saada", "Souk El Had", "Zemmoura", "Zerouala"]
  },
  {
    id: 49, name: "Timimoun", nameAr: "تيميمون",
    municipalities: ["Timimoun", "Ouled Saïd", "Tinerkouk", "Kerkene", "Metarfa", "Talmine", "Charouine", "Tindouf"]
  },
  {
    id: 50, name: "Bordj Badji Mokhtar", nameAr: "برج باجي مختار",
    municipalities: ["Bordj Badji Mokhtar", "Timiaouine"]
  },
  {
    id: 51, name: "Ouled Djellal", nameAr: "أولاد جلال",
    municipalities: ["Ouled Djellal", "Besbes", "Doucen", "Ouled Djellal Centre", "Sidi Khaled", "Ras El Miaad"]
  },
  {
    id: 52, name: "Béni Abbès", nameAr: "بني عباس",
    municipalities: ["Beni Abbes", "Beni Ikhlef", "Beni Ounif", "Igli", "Kerzaz", "Laasfa", "Ouled Khoudir", "Tamtert", "Timoudi", "El Ouata"]
  },
  {
    id: 53, name: "In Salah", nameAr: "عين صالح",
    municipalities: ["In Salah", "Foggaret Ezzoua", "In Ghar", "Tidikelt", "Ain Salah", "Silet"]
  },
  {
    id: 54, name: "In Guezzam", nameAr: "عين قزام",
    municipalities: ["In Guezzam", "Tin Zouatine", "Ain Guezzam", "Tazrouk"]
  },
  {
    id: 55, name: "Touggourt", nameAr: "تقرت",
    municipalities: ["Touggourt", "Benaceur", "Bilda", "El Alia", "El Hadjira", "Megarine", "M'naguer", "Nezla", "Sidi Slimane", "Taibet", "Tebesbest", "Zaouia El Abidia"]
  },
  {
    id: 56, name: "Djanet", nameAr: "جانت",
    municipalities: ["Djanet", "Bordj El Houasse", "Tassili"]
  },
  {
    id: 57, name: "El M'Ghair", nameAr: "المغير",
    municipalities: ["El M'ghair", "Djamâa", "El Ogla", "Kouinine", "M'zad", "Still", "Tenedla", "Oued Alenda"]
  },
  {
    id: 58, name: "El Meniaa", nameAr: "المنيعة",
    municipalities: ["El Meniaa", "Hassi Fehal", "Hassi Lefhal", "Mansoura"]
  }
];
