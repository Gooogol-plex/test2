console.log('')
console.log('-------------------------------')
console.log('  Bot Lobzick запускается')
console.log('  Кодеры: Максим Барбаров, Максим Караман')
console.log('  Ответственный за рекламу и розыгрыши: Серожа Атаев')
console.log('  vk.com/club187856624')

console.log('-------------------------------')
console.log('')

// ВСЕ НАСТРОЙКИ В ФАЙЛЕ /database/settings.json! 

const { VK } = require('vk-io');
const vk = new VK();
const commands = [];
const request = require('prequest');

const cars = [
	{
		name: 'Скейтборд',
		cost: 500,
		id: 1
	},
	{
		name: 'Велосипед',
		cost: 2500,
		id: 2
	},
	{
		name: 'Гироскутер',
		cost: 5000,
		id: 3
	},
	{
		name: 'Сегвей',
		cost: 7500,
		id: 4
	},
	{
		name: 'Скутер',
		cost: 25000,
		id: 5
	},
	{
		name: 'Мотоцикл',
		cost: 50000,
		id: 6
	},
	{
		name: 'Квадроцикл',
		cost: 75000,
		id: 7
	},
	{
		name: 'Жигуль',
		cost: 80000,
		id: 8
	},
	{
		name: 'Багги',
		cost: 135000,
		id: 9
	},
	{
		name: 'Вездеход',
		cost: 200000,
		id: 10
	},
	{
		name: 'Снегоход',
		cost: 350000,
		id: 11
	},
	{
		name: 'Танк',
		cost: 750000,
		id: 12
	},
	{
		name: 'BMW X6',
		cost: 1000000,
		id: 13
	},
	{
		name: 'Toyota FT-HS',
		cost: 1750000,
		id: 14
	},
	{
		name: 'BMW Z4 M',
		cost: 2500000,
		id: 15
	},
	{
		name: 'Subaru WRX STI',
		cost: 2750000,
		id: 16
	},
	{
		name: 'Lamborghini Veneno',
		cost: 3000000,
		id: 17
	},
	{
		name: 'Mercedes-Benz G-class Gelandewagen AMG',
		cost: 4500000,
		id: 18
	},
	{
		name: 'Koenigsegg One:1',
		cost: 5000000,
		id: 19
	},
	{
		name: 'Bugatti Veyron',
		cost: 6500000,
		id: 20
	},
	{
		name: 'Lamborghini Veneno',
		cost: 35000000,
		id: 21
	},
	{
		name: 'Ferrari LaFerrari',
		cost: 39000000,
		id: 22
	},
	{
		name: 'Hennessey Venom GT',
		cost: 50000000,
		id: 23
	},
	{
		name: 'Rolls Royace',
		cost: 75000000,
		id: 24
	},
	{
		name: 'Devel Sixteen',
		cost: 125000000,
		id: 25
	},
	{
		name: 'Mercedes Lobzick',
		cost: 200000000,
		id: 26
	}
];

const yachts = [
	{
		name: 'Тазик',
		cost: 10000,
		id: 1
	},
	{
		name: 'Доска для серфинга',
		cost: 100000,
		id: 2
	},
	{
		name: 'Nordhavn 56 MS',
		cost: 15000000,
		id: 3
	},
	{
		name: 'Princess 60',
		cost: 25000000,
		id: 4
	},
	{
		name: 'Azimut 70',
		cost: 35000000,
		id: 5
	},
	{
		name: 'The Rising Sun',
		cost: 50000000,
		id: 6
	},
	{
		name: 'Seven Seas',
		cost: 60000000,
		id: 7
	},
	{
		name: 'Dilbar',
		cost: 65000000,
		id: 8
	},
	{
		name: 'Superyacht A',
		cost: 80000000,
		id: 9
	},
	{
		name: 'Aurora',
		cost: 85000000,
		id: 10
	},
	{
		name: 'Titanic',
		cost: 150000000,
		id: 11
	},
	{
		name: 'Пиратский корабль',
		cost: 300000000,
		id: 12
	},
	{
		name: 'Lobzick-Ship',
		cost: 750000000,
		id: 13
	}
];

const airplanes = [
	{
		name: 'Дельтаплан',
		cost: 100000,
		id: 1
	},
	{
		name: 'Параплан',
		cost: 350000,
		id: 2
	},
	{
		name: 'Кукурузник',
		cost: 700000,
		id: 3
	},
	{
		name: 'Supermarine Spitfire',
		cost: 1000000,
		id: 4
	},
	{
		name: 'BRM NG-5',
		cost: 1400000,
		id: 5
	},
	{
		name: 'Boeing 747-400',
		cost: 2600000,
		id: 6
	},
	{
		name: 'Beechcraft 1900D',
		cost: 5500000,
		id: 7
	},
	{
		name: 'Cessna 550',
		cost: 8000000,
		id: 8
	},
	{
		name: 'Hawker 4000',
		cost: 22400000,
		id: 9
	},
	{
		name: 'Learjet 31',
		cost: 45000000,
		id: 10
	},
	{
		name: 'Airbus A318',
		cost: 85000000,
		id: 11
	},
	{
		name: 'F-35A',
		cost: 160000000,
		id: 12
	},
	{
		name: 'Boeing 747-430 Custom',
		cost: 225000000,
		id: 13
	},
	{
		name: 'C-17A Globemaster III',
		cost: 350000000,
		id: 14
	},
	{
		name: 'F-22 Raptor',
		cost: 400000000,
		id: 15
	},
	{
		name: 'Airbus 380 Custom',
		cost: 600000000,
		id: 16
	},
	{
		name: 'Lobzick-Plane',
		cost: 1359000000,
		id: 17
	}
];

const helicopters = [
	{
		name: 'Шарик с гелием',
		cost: 2,
		id: 1,
		icon: '[🚁]'
	},
	{
		name: 'RotorWay Exec 162F',
		cost: 300000,
		id: 2,
		icon: '[🚁]'
	},
	{
		name: 'EUROCOPTER EC155 B1 DAUPHIN',
		cost: 450000,
		id: 3,
		icon: '[🚁]'
	},
	{
		name: 'Hiller UH-12C',
		cost: 1300000,
		id: 4,
		icon: '[🚁]'
	},
	{
		name: 'AGUSTAWESTLAND BA609',
		cost: 2500000,
		id: 5,
		icon: '[🚁]'
	},
	{
		name: 'MBB BK 117',
		cost: 4000000,
		id: 6,
		icon: '[🚁]'
	},
	{
		name: 'Eurocopter EC130',
		cost: 7500000,
		id: 7,
		icon: '[🚁]'
	},
	{
		name: 'Leonardo AW109 Power',
		cost: 10000000,
		id: 8,
		icon: '[🚁]'
	},
	{
		name: 'Sikorsky S-76',
		cost: 15000000,
		id: 9,
		icon: '[🚁]'
	},
	{
		name: 'Bell 429WLG',
		cost: 19000000,
		id: 10,
		icon: '[🚁]'
	},
	{
		name: 'NHI NH90',
		cost: 35000000,
		id: 11,
		icon: '[🚁]'
	},
	{
		name: 'EUROCOPTER EC225 SUPER PUMA MK II+',
		cost: 60000000,
		id: 12,
		icon: '[🚁]'
	},
	{
		name: 'LobzickCopter',
		cost: 135000000,
		id: 13,
		icon: '[🚁]'
	}
];

const homes = [
	{
		name: 'Подстилка под мостом',
		cost: 250,
		id: 1
	},
	{
		name: 'Подвал',
		cost: 3000,
		id: 2
	},
	{
		name: 'Палатка',
		cost: 3500,
		id: 3
	},
	{
		name: 'Домик на дереве',
		cost: 5000,
		id: 4
	},
	{
		name: 'Землянка',
		cost: 10000,
		id: 5
	},
	{
		name: 'Дом лесника',
		cost: 25000,
		id: 6
	},
	{
		name: 'Деревянный дом',
		cost: 37500,
		id: 7
	},
	{
		name: 'Загородный дом',
		cost: 125000,
		id: 8
	},
	{
		name: 'Кирпичный дом',
		cost: 80000,
		id: 9
	},
	{
		name: 'Двухэтажный дом',
		cost: 450000,
		id: 10
	},
	{
		name: 'Buckingham Palace',
		cost: 1250000,
		id: 11
	},
	{
		name: 'Дом в Майнкрафте',
		cost: 5000000,
		id: 12
	},
	{
		name: 'Дом на Карибах',
		cost: 7000000,
		id: 13
	},
	{
		name: 'Дом Путина',
		cost: 12500000,
		id: 14
	},
	{
		name: 'Lobzick-House',
		cost: 20000000,
		id: 15
	}
];

const apartments = [
	{
		name: 'Чердак',
		cost: 15000,
		id: 1
	},
	{
		name: 'Квартира в общежитии',
		cost: 55000,
		id: 2
	},
	{
		name: 'Однокомнатная квартира',
		cost: 175000,
		id: 3
	},
	{
		name: 'Двухкомнатная квартира',
		cost: 260000,
		id: 4
	},
	{
		name: 'Четырехкомнатная квартира',
		cost: 500000,
		id: 5
	},
	{
		name: 'Квартира в центре Москвы',
		cost: 1600000,
		id: 6
	},
	{
		name: 'Квартира в центре Нью-Йорка',
		cost: 4000000,
		id: 7
	},
	{
		name: 'Квартира админа',
		cost: 6000000,
		id: 8
	}
];

const phones = [
	{
		name: 'Nokia 3310',
		cost: 250,
		id: 1
	},
	{
		name: 'Nokia X ',
		cost: 500,
		id: 2
	},
	{
		name: 'ASUS ZenFone 4',
		cost: 2000,
		id: 3
	},
	{
		name: 'Sony Xperia XA',
		cost: 10000,
		id: 4
	},
	{
		name: 'Xiaomi redmi 8A',
		cost: 15000,
		id: 5
	},
	{
		name: 'Samsung A40',
		cost: 30000,
		id: 6
	},
	{
		name: 'Xiaomi Mi 9T',
		cost: 50000,
		id: 7
	},
	{
		name: 'Huawei p40 pro',
		cost: 75000,
		id: 8
	},
	{
		name: 'iPhone X',
		cost: 100000,
		id: 9
	},
	{
		name: 'Каменный телефон',
		cost: 250000,
		id: 10
	},
	{
		name: 'iPhone 11 pro max',
		cost: 500000,
		id: 11
	}
];

const pets = [
	{
		name: 'Блоха',
		cost: 1000,
		id: 1
	},
	{
		name: 'Мышь',
		cost: 25000,
		id: 2
	},
	{
		name: 'Кролик',
		cost: 500000,
		id: 3
	},
	{
		name: 'Собака',
		cost: 300000000,
		id: 4
	},
	{
		name: 'Кошка',
		cost: 450000000,
		id: 5
	},
	{
		name: 'Волк',
		cost: 5000000000,
		id: 6
	},
	{
		name: 'Медведь',
		cost: 15000000000,
		id: 7
	},
	{
		name: 'Панда',
		cost: 30000000000,
		id: 8
	},
	{
		name: 'Lobzick',
		cost: 180000000000,
		id: 9
	}
];


const petsupd = [
	{
		cost: 2000,
		id: 1
	},
	{
		cost: 50000,
		id: 2
	},
	{
		cost: 1000000,
		id: 3
	},
	{
		cost: 600000000,
		id: 4
	},
	{
		cost: 900000000,
		id: 5
	},
	{
		cost: 10000000000,
		id: 6
	},
	{
		cost: 30000000000,
		id: 7
	},
	{
		cost: 60000000000,
		id: 8
	},
	{
		cost: 360000000000,
		id: 9
	}
];

const farms = [
	{
		name: '6U Nvidia',
		cost: 20500000,
		id: 1
	},
	{
		name: 'AntminerS9',
		cost: 100000000,
		id: 2
	},
	{
		name: 'FM2018-BT200',
		cost: 900000000,
		id: 3
	},
	{
		name: 'Genesis Mining X11',
		cost: 2500000000,
		id: 4
	},
	{
		name: 'GigaWatt',
		cost: 10000000000,
		id: 5
	}
];

const businesses = [
	{
		name: 'Кузница',
		cost: 1000000,
		earn: 2000000,
		id: 1,
		icon: '[🔨]'
	},
	{
		name: 'Веломагазин',
		cost: 2000000,
		earn: 4000000,
		id: 2,
		icon: '[🚲]'
	},
	{
		name: 'Супермаркет',
		cost: 6000000,
		earn: 12000000,
		id: 3,
		icon: '[🏫]'
	},
	{
		name: 'Спортзал',
		cost: 20000000,
		earn: 40000000,
		id: 4,
		icon: '[⚽]'
	},
	{
		name: 'Фабрика',
		cost: 1000000000,
		earn: 2000000000,
		id: 5,
		icon: '[🏭]'
	},
	{
		name: 'Автосалон',
		cost: 3000000000,
		earn: 6000000000,
		id: 6,
		icon: '[🚗]'
	},
	{
		name: 'Ювелирка',
		cost: 20000000000,
		earn: 40000000000,
		id: 7,
		icon: '[💎]'
	},
	{
		name: 'Частное казино',
		cost: 999999999999,
		earn: 1999999999999,
		id: 8,
		icon: '[🎰]'
	},
	{
		name: 'Магазин электроники',
		cost: 30000000000000,
		earn: 7000000000000,
		id: 9,
		icon: '[📺]'
	},
	{
		name: 'Гидроэлектростанция',
		cost: 80000000000000,
		earn: 20000000000,
		id: 10,
		icon: '[💡]'
	},
	{
		name: 'Рыболовное судно',
		cost: 120000000000000,
		earn: 220000000000,
		id: 11,
		icon: '[🐟]'
	},
    {
		name: 'Ракетный аэродром',
		cost: null,
		earn: 75000000000,
		id: 12,
		icon: '[🚀]'
	}
];

const works = [
	{
		name: 'Охранник',
		requiredLevel: 1,
		min: 2000,
		max: 2500,
		id: 1
	},
	{
		name: 'Сантехник',
		requiredLevel: 3,
		min: 3750,
		max: 4000,
		id: 2
	},
	{
		name: 'Электрик',
		requiredLevel: 5,
		min: 4000,
		max: 4500,
		id: 3
	},
	{
		name: 'Лесник',
		requiredLevel: 8,
		min: 5000,
		max: 5500,
		id: 4
	},
	{
		name: 'Официант',
		requiredLevel: 10,
		min: 7500,
		max: 8000,
		id: 5
	},
	{
		name: 'Экономист',
		requiredLevel: 14,
		min: 9000,
		max: 9489,
		id: 6
	},
	{
		name: 'Адвокат',
		requiredLevel: 22,
		min: 10000,
		max: 12500,
		id: 7
	},
	{
		name: 'Генетик',
		requiredLevel: 25,
		min: 12500,
		max: 13500,
		id: 8
	},
	{
		name: 'Программист в гугл',
		requiredLevel: 49,
		min: 16000,
		max: 17500,
		id: 9
	}
];

const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'Infinity');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	}
}

let promo = "0";

const rotateText = {
	q: 'q',
	w: 'ʍ',
	e: 'ǝ',
	r: 'ɹ',
	t: 'ʇ',
	y: 'ʎ',
	u: 'u',
	i: 'ᴉ',
	o: 'o',
	p: 'p',
	a: 'ɐ',
	s: 's',
	d: 'd',
	f: 'ɟ',
	g: 'ƃ',
	h: 'ɥ',
	j: 'ɾ',
	k: 'ʞ',
	l: 'l',
	z: 'z',
	x: 'x',
	c: 'ɔ',
	v: 'ʌ',
	b: 'b',
	n: 'n',
	m: 'ɯ',

	й: 'ņ',
	ц: 'ǹ',
	у: 'ʎ',
	к: 'ʞ',
	е: 'ǝ',
	н: 'н',
	г: 'ɹ',
	ш: 'm',
	щ: 'm',
	з: 'ε',
	х: 'х',
	ъ: 'q',
	ф: 'ф',
	ы: 'ıq',
	в: 'ʚ',
	а: 'ɐ',
	п: 'u',
	р: 'd',
	о: 'о',
	л: 'v',
	д: 'ɓ',
	ж: 'ж',
	э: 'є',
	я: 'ʁ',
	ч: 'һ',
	с: 'ɔ',
	м: 'w',
	и: 'и',
	т: 'ɯ',
	ь: 'q',
	б: 'ƍ',
	ю: 'oı'
}

let btc = 6000;

let smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`]);
let smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`]);
let smilecasino1 = ([`message.sendSticker(12710)`])
let smilecasino2 = ([`message.sendSticker(12678)`])
let smilecasino3 = ([`message.sendsticker(12709)`])

let users = require('./database/users.json');
let config = require('./database/settings.json');
let config2 = require('./app.js');
let clans = require('./database/clans.json');
let buttons = [];

setTimeout(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
	await saveUsers();
	console.log(' База данных успешно сохранена.');
	console.log('');
}, 30000);

setInterval(async () => {
    await saveClans();
    console.log(' База кланов успешно сохранена.');
    console.log('');
}, 30000);

setInterval(async () => {

smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`]);
smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`]);

}, 1);

setInterval(async () => {
	users.filter(x=> x.misc.farm !== 0).map(x=> {
		var frmbtc = 0;
		if(x.misc.farm === 1)
		{
			frmbtc += 2;
		}

		if(x.misc.farm === 2)
		{
			frmbtc += 10;
		}

		if(x.misc.farm === 3)
		{
			frmbtc += 100;
		}
		var frmbtcm = frmbtc * x.farms;
		x.misc.farm_btc += frmbtcm;
	});
}, 3600000);

    var uptime = { sec: 0, min: 0, hours: 0, days: 0 }
 
    setInterval(() => {
        uptime.sec++;
        if (uptime.sec == 60) { uptime.sec = 0; uptime.min += 1; }
        if (uptime.min == 60) { uptime.min = 0; uptime.hours += 1; }
        if (uptime.hours == 24) { uptime.hours = 0; uptime.days += 1; }
    }, 1000);

 
 
     function time() {
            let date = new Date();
            let days = date.getDate();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes = "0" + minutes;
            if (seconds < 10) seconds = "0" + seconds;
            var times = hours + ':' + minutes + ':' + seconds
            return times;
    }
    function data() {
        var date = new Date();
        let days = date.getDate();
        let month = date.getMonth() + 1; 
        if (month < 10) month = "0" + month;
        if (days < 10) days = "0" + days;
        var datas = days + ':' + month + ':2018' ;
        return datas;
    }

setInterval(async () => {
	users.filter(x=> x.settings.old == false).map(x=> {
		x.settings.old == true;
	});
}, 604800);

setInterval(async () => {
	users.map(user => {
		if(user.business)
		{
			const biz = businesses.find(x=> x.id === user.business);
			if(!biz) return;

			user.biz += biz.earn;
		}
	});
}, 3600000);

function clearTemp()
{
	users.map(user => {
		user.timers.hasWorked = false;
		user.timers.bonus = false;
		user.promo = false;
		user.energy = 10;
	});
}

function clearPromo()
{
	promo = 0;
	users.map(user => {
		user.promo = false;
	});
}

function msgError(messagetext)
{
	return bot(`${messagetext} ${utils.pick([`😯`, `🙂`, `🤑`, `☺`])}`);
}

clearTemp();
clearPromo();

async function saveUsers()
{
	require('fs').writeFileSync('./database/users.json', JSON.stringify(users, null, '\t'));
	return true;
}

async function saveConfig()
{
	require('fs').writeFileSync('./database/settings.json', JSON.stringify(config, null, '\t'));
	return true;
}

async function saveClans()
{ 
    require('fs').writeFileSync('./database/clans.json', JSON.stringify(clans, null, '\t')); 
    return true; 
}

vk.setOptions({ token: config.grouptoken, pollingGroupId: config.groupid });
const { updates, snippets } = vk;

updates.startPolling();
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[botfisherr\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[botfisherr\|(.*)\]/ig, '').trim();

	if(!users.find(x=> x.id === message.senderId))
	{
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();


            users.push({
			id: message.senderId,
			uid: users.length,
			balance: 50000000,
			bank: 0,
			btc: 0,
			farm_btc: 0,
			farms: 0,
			farmslimit: 200,
			energy: 10,
			opit: 0,
			biz: 0,
			zhelezo: 0,
			zoloto: 0,
			almaz: 0,
			bizlvl: 0,
			nicklimit: 16,
			rating: 0,
			regDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
			mention: true,
			ban: false,
			timers: {
				hasWorked: false,
				bonus: false,
				poxod: false,
				poxod2: false,
				kopat: false,
				hack: false,
				money: false,
				helpbonus: false,
				grab: false,
				perlimit: 0,
				per: 0
			},
			tag: user_info.first_name,
			work: 0,
			business: 0,
			notifications: true,
			exp: 1,
			level: 1,
			referal: null,
			promo: false,
			transport: {
				car: 0,
				yacht: 0,
				airplane: 0,
				helicopter: 0
			},
			realty: {
				home: 0,
				apartment: 0
			},
			misc: {
				phone: 0,
				farm: 0,
				pet: 0,
			},
			settings: {
				firstmsg: true,
				adm: 0,
				trade: true,
				banrep: true,
				old: false,
				limit: 250000000000,
			},
			pet: {
				lvl: 0,
				poterl: false
			},
			marriage: {
				partner: 0,
				requests: []
			},
			vig: 0,
			case: 0,
			cases: 0,
			grab: false,
			kiss: 0,
			giving: false,
			ref: 0,
			donate: 0,
			admkeys: 0,
			donatekeys: 0,
			banrep: false,
			perlimit: 100000000000,
			per: 0,
			clanid: false,
			weapon: 0,
			mask: 0,
			foolder: 1,
     		});
		console.log(` +1 игрок [Игроков: ${users.length}]`);
		console.log(``);
		saveUsers();
	}

	message.user = users.find(x=> x.id === message.senderId);

	const bot = (text, params) => {
		return message.send(`${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
	}

	if(message.user.ban) return bot(`[⛔] » Ваш аккаунт заблокирован. Если вы считаете, что бан неправильный, напишите обжалование.`);

	const command = commands.find(x=> x[0].test(message.text));

	if(message.user.settings.firstmsg)
	{

bot(`я вижу ты новенький! Рад познакомится, отправь «помощь» что бы узнать мои команды. 📚
Беседа с ботом: *Ссылка временно отсутствует*`,
message.sendSticker(12970),
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "🔑 Бонус"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "📚 Помощь"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Профиль"
		},
			"color": "primary"
		}
]
		]
			})
		});

    {  
	    vk.api.messages.send({ chat_id: 1, message: `[#${message.user.uid}] Новый пользователь: @id${message.user.id} (${message.user.tag})`});
    }
		message.user.settings.firstmsg = false;


		saveUsers();
		return;

	}

	if(!command)
	{

		if(!message.isChat) return bot(`такой команды не существует, отправь «помощь» что бы узнать мои команды.`);
		if(message.isChat) return;

	}

	if(message.user.exp >= 24)
	{
		message.user.exp = 1;
		message.user.level += 1;
	}
	message.args = message.text.match(command[0]);
	await command[1](message, bot);

	saveUsers();
	console.log(` Введена команда: ${message.text}.`) 
	console.log(``)
	{  
	    vk.api.messages.send({ chat_id: 3, message: `@id${message.user.id} (${message.user.tag}) - Введена команда: ${message.text}.`});
    }
});


const cmd = {
	hear: (p, f) => {
		commands.push([p, f]);
	}
}

cmd.hear(/^(?:помощь|команды|📚 Помощь|меню|help|commands|cmds|menu|начать|start|пом|ok lobzick|ок лобзик)$/i, async (message, bot) => {
message.user.foolder += 1;
	await bot(`мои команды:

🍀 Развлекательные:
🙊 Анекдот
↪ Переверни [фраза]
🔮 Шар [фраза]
📊 Инфа [фраза]
⚖ Выбери [фраза] или [фраза2]

🚀 Игры:
⠀⠀🎲 Кубик [1-6]
⠀⠀🎰 Казино [сумма]
⠀⠀🥛 Стаканчик [1-3] [сумма]
⠀⠀🔦 Сейф [случайные 2 цифры] 
⠀⠀🍂 Копать
⠀⠀🚕 Таксовать

👔 Работа - список работ
⠀🔨 Работать
⠀❌ Уволиться

💼 Бизнес:
⠀⠀📈 Бизнес - статистика
⠀⠀💵 Бизнес снять
⠀⠀✅ Бизнес улучшить

🌽 Питомцы:
⠀⠀🐒 Питомец - информация
⠀⠀🐪 Питомец поход
⠀⠀🌟 Питомец улучшить

⚔ Кланы:
  ⚔ Клан помощь

🔥 Полезное:
📠 Реши [пример]
📊 Курс

💡 Разное:
📒 Профиль
💲 Баланс
💰 Банк [сумма/снять сумма]
👑 Рейтинг - ваш рейтинг
✒ Ник [ник/вкл/выкл]
🛒 Магазин
➖ Продать [предмет]
🔋 Ферма - биткоин ферма
🤝 Передать [id] [сумма]
🏆 Топ
🏆 Топ [бал|бит]
💎 Бонус - ежедневный бонус
👪 Брак [id] - сделать предложение
⠀ ⠀Браки - список предложений
💔 Развод
⌚ Дата [id] - дата регистрации игрока
🎁 Донат

🆘 Репорт [фраза] - ошибки или пожелания
👤 Админ - Возможности привилегий`, );
{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "🔑 Бонус"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "📚 Помощь"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "🔋 Ферма"
		},
			"color": "primary"
		}
]
		]
			})
		};
});

cmd.hear(/^(?:помощь)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	message.args[1] = message.args[1].toLowerCase();

	if(message.args[1] === 'переверни')
	{
		return message.send(`Команда "Переверни" пишет ваш текст вверх ногами (Поддерживаются цифры, буквы латинского и кириллического алфавита, а также некоторые символы)`);
	}

	if(message.args[1] === 'шар')
	{
		return message.send(`Команда "Шар" используя магию рандома выводит случайное сообщение.`);
	}

	if(message.args[1] === 'инфа')
	{
		return message.send(`Команда "Инфа" случайным образом присылает шанс чего-либо. Также можно использовать команды "Шанс" или "Вероятность"`);
	}

	if(message.args[1] === 'выбери')
	{
		return message.send(`Команда "Выбери" случайным образом выбирает один из двух предложенных вариантов.`);
	}

	if(message.args[1] === 'казино')
	{
		return message.send(`Команда "Казино" случайным образом умножает вашу ставку (Могут выпасть множители х0, х0.25, х0.5, x0.75, х1, х2, х5, х50). Чтобы поставить всю сумму введите "Казино все" или "Казино вабанк"`);
	}

	if(message.args[1] === 'кубик')
	{
		return message.send(`Команда "Кубик" сравнивает ваше число со случайным от 1 до 6, если вы угадали, то получаете вознаграждение. Также можно использовать "Куб"`);
	}

	if(message.args[1] === 'трейд')
	{
		return message.send(`Команда "Трейд" - симулятор бинарных опционов. Введите "Трейд вверх (сумма)" если думаете, что курс валюты будет увеличиваться, или "Трейд вниз (сумма)" если будет уменьшаться.`);
	}

	if(message.args[1] === 'стаканчик')
	{
		return message.send(`С помощью команды "Стаканчик" вы можете сыграть в аналог игры "Напёрстки". Чтобы играть введите "Стаканчик [1-3] [сумма]".`);
	}

	if(message.args[1] === 'работа')
	{
		return message.send(`С помощью команды "Работа" вы можете устроиться на одну из работ. Чтобы отрыть новые профессии, вам нужно отработать определённое кол-во игровых недель (Команда "Работать"). Для увольнения с работы введите "Уволиться".`);
	}

	if(message.args[1] === 'бизнес')
	{
		return message.send(`Владея бизнесом, вы можете зарабатывать немало денег:
		Бизнесы [номер] - купить бизнес
		Бизнес - ваш бизнес
		Бизнес снять - снять деньги со счёта бизнеса
		Продать бизнес - продажа бизнеса`);
	}

	if(message.args[1] === 'реши')
	{
		return message.send(`Команда "Реши" решает ваш пример (Реши 5 + 5).
		Команда умеет:
		Складывать (+)
		Вычитать (-)
		Умножать (*)
		Делить (/)`);
	}

	if(message.args[1] === 'курс')
	{
		return message.send(`С помощью команды "Курс" можно узнать курс Биткоина на данный момент.`);
	}

	if(message.args[1] === 'профиль')
	{
		return message.send(`Команда "Профиль" выводит вашу игровую статистику.`);
	}

	if(message.args[1] === 'баланс')
	{
		return message.send(`Команда "Баланс" выводит кол-во валюты на вашем аккаунте.`);
	}

	if(message.args[1] === 'банк')
	{
		return message.send(`При вводе команды "Банк" (без параметров) выводится ваша сумма на счёте. Для того чтобы положить на счёт деньги введите "Банк [сумма]" (Максимум 250.000.000.000$). Чтобы забрать деньги из банка введите "Банк снять/взять [сумма]".
		Сумма в банке увеличивается каждый час (больше сумма - больше прибыль).`);
	}

	if(message.args[1] === 'рейтинг')
	{
		return message.send(`Пустая команда "Рейтинг" (без параметров) выводит ваше кол-во рейтинга (также можно узнать в профиле). При указании параметра (любое число) вы купите данное кол-во единиц рейтинга (👑1 = 250.000.000$). Рейтинг влияет на ваше положение в топе.`);
	}

	if(message.args[1] === 'ник')
	{
		return message.send(`С помощью команды "Ник" можно выбрать себе ник длинною до 15 символов. Также, ник можно делать кликабельным/некликабельным в топе "Ник вкл" и "Ник выкл"`);
	}

	if(message.args[1] === 'магазин')
	{
		return message.send(`Команда "Магазин" выводит список категорий товаров, которые доступны для покупки.`);
	}

	if(message.args[1] === 'продать')
	{
		return message.send(`С помощью команды "Продать" вы можете продать любой предмет (Машину, дом, квартиру, телефон, яхту, самолет, вертолет, биткоин, ферму).`);
	}

	if(message.args[1] === 'передать')
	{
		return message.send(`Команда "Передать" переводит указанную вами сумму любому игроку (Передать ${message.user.uid} 1000).`);
	}

	if(message.args[1] === 'топ')
	{
		return message.send(`Команда "Топ" выводит 10 игроков с самым большим рейтингом.`);
	}

	if(message.args[1].includes('брак'))
	{
		return message.send(`Используя команды "Брак", "Браки", "развод", вы можете жениться/выходить замуж/разводиться.
		Брак [id] - сделать предложение
		Браки - список предложений
		Развод - ...`);
	}

	if(message.args[1] === 'дата')
	{
		return message.send(`Команда "Дата" выводит дату регистрации человека в боте. Можно использовать id человека.`);
	}

	if(message.args[1] === 'репорт')
	{
		return message.send(`С помощью команды "Репорт" вы можете отправить создателю бота любое сообщение. Также можно использовать "Реп", "Жалоба", "Rep".`);
	}
});

cmd.hear(/^(?:переверни)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
	let text = ``;
	message.args[1].split('').map(x=> {
		if(rotateText[x])
		{
			text += rotateText[x];
		}
	});

	return bot(`держи: "${text.split('').reverse().join('')}"`)
});

cmd.hear(/^(?:анекдот)$/i, async (message, bot) => {
message.user.foolder += 1;
	let textanek = utils.pick(['Разговариваают два американца:\n — У этих русских не только душа другая. Они и устроены по-другому.\n — ?\n — Я сам слышал как один сказал другому — Одень ты на х@й шапку, а то уши замерзнут.', 'Бывает, борешься за что-то, борешься, а потом в один прекрасный момент понимаешь: «А пошло оно все на х@й! » И жить становится намного проще.', '"А это точно поможет? ", — недоверчиво спрашивала царевна Несмеяна, поднося к губам какую-то самокрутку.', 'Чтобы хоть как-то привлечь внимание школьников, преподавательница написала на доске « Жесть. Смотреть всем».', 'Если Патриарх Кирилл верит в Бога, то почему он ездит в бронированном Мерседесе под охраной ФСО за счет бюджета, а не надеется на заступничество своего небесного начальника?']);

	return bot(`анекдот: 

	${textanek}`)
});

cmd.hear(/^(?:шар)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
	const phrase = utils.pick(['перспективы не очень хорошие', 'сейчас нельзя предсказать', 'пока не ясно', 'знаки говорят - "Да"', 'знаки говорят - "Нет"', 'можешь быть уверен в этом', 'мой ответ - "нет"', 'мой ответ - "да"', 'бесспорно', 'мне кажется - "Да"', 'мне кажется - "Нет"']);
	return bot(phrase);
});

cmd.hear(/^(?:инфа|шанс|вероятность)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
	const phrase = utils.pick(['шанс этого', 'мне кажется около']);
	const percent = utils.random(100);

	return bot(`${phrase} ${percent}%`)
});

cmd.hear(/^(?:выбери)\s([^]+)\s(?:или)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
	const first = message.args[1];
	const second = message.args[2];

	const phrase = utils.pick([`конечно ${utils.random(1, 2)} вариант`, `мне кажется, что ${utils.random(1, 2)} вариант лучше`]);
	return bot(`${phrase}`);
});

cmd.hear(/^(?:donate)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`[💬] >> Купить донат можно ТОЛЬКО на нашем сайте: https://qiwi.me/botmoon ✅`);
});

cmd.hear(/^(?:п|прф|проф|профиль)$/i, async (message, bot) => { 
message.user.foolder += 1;
let text = ``; 

text += `[👤] >> Ник: @id${message.user.id} (${message.user.tag})\n`
text += `[🔎] >> ID: ${message.user.uid}\n`
text += `[💰] >> Денег: ${utils.sp(message.user.balance)}$\n`; 
text += `[💳] >> В банке: ${utils.sp(message.user.bank)}$\n`; 
text += `[💽] >> Биткоинов: ${utils.sp(message.user.btc)}฿\n`; 
text += `[👑] >> Рейтинг: ${utils.sp(message.user.rating)}\n`; 
if(message.user.work) text += `[👔] >> Работа: ${works[message.user.work - 1].name}\n`; 
if(message.user.marriage.partner) text += `[👬] >> Парень/Девушка: ${users[message.user.marriage.partner].tag}\n`; 
text += `[🌟] >> Уровень: ${message.user.level} [${message.user.exp}/24]\n`;
if(message.user.case) text += `[🧳] >> Кейсов: ${message.user.case}\n`; 
if(message.user.kiss) text += `[💋] >> Поцелуев: ${message.user.kiss}\n`;
if(message.user.foolder) text += `[✉] >> Использовано команд: ${message.user.foolder}\n`;

if(message.user.settings.adm > 2)
{
text += `\n[👤] >> Персонал\n`;
}
if(message.user.settings.adm < 3)
{
text += `\n[👤] >> Игрок\n`;
}
{
if(message.user.settings.adm > 2) text += ` [🔥] >> Должность: ${message.user.settings.adm.toString().replace(/0/gi, "Игрок\n").replace(/1/gi, "VIP\n").replace(/2/gi, "Premium\n").replace(/3/gi, "✔Модератор✔\n").replace(/4/gi, "✔Старший Модератор✔\n").replace(/5/gi, "✔Администратор✔\n").replace(/6/gi, "✔Зам.Главного.Администратора✔\n").replace(/7/gi, "✔Главный Администратор✔\n").replace(/8/gi, "✔Спец.Администратор✔\n").replace(/9/gi, "✔Разработчик✔\n")}`;
if(message.user.settings.adm < 3) text += ` [🔥] >> Привелегия: ${message.user.settings.adm.toString().replace(/0/gi, "Игрок\n").replace(/1/gi, "VIP\n").replace(/2/gi, "Premium\n").replace(/3/gi, "✔Модератор✔\n").replace(/4/gi, "✔Старший Модератор✔\n").replace(/5/gi, "✔Администратор✔\n").replace(/6/gi, "✔Зам.Главного.Администратора✔\n").replace(/7/gi, "✔Главный Администратор✔\n").replace(/8/gi, "✔Спец.Администратор✔\n").replace(/9/gi, "✔Разработчик✔\n")}`;
if(message.user.vig) text += `[❗] >> Выговоров: ${message.user.vig}\n`;
}

if(message.user.transport.car || message.user.transport.yacht || message.user.transport.airplane || message.user.transport.helicopter || 
message.user.realty.home || message.user.realty.apartment || 
message.user.misc.phone || message.user.misc.farm || message.user.business || message.user.misc.pet) 
{ 
text += `\n[🔑] >> Имущество:\n`; 

if(message.user.transport.car) text += `⠀[🚗] >> Машина: ${cars[message.user.transport.car - 1].name}\n`; 
if(message.user.transport.yacht) text += `⠀[🛥] >> Яхта: ${yachts[message.user.transport.yacht - 1].name}\n`; 
if(message.user.transport.airplane) text += `⠀[🛩] >> Самолёт: ${airplanes[message.user.transport.airplane - 1].name}\n`; 
if(message.user.transport.helicopter) text += `⠀[🚁] >> Вертолёт: ${helicopters[message.user.transport.helicopter - 1].name}\n`; 

if(message.user.realty.home) text += `⠀[🏠] >> Дом: ${homes[message.user.realty.home - 1].name}\n`; 
if(message.user.realty.apartment) text += `⠀[🌇] >> Квартира: ${apartments[message.user.realty.apartment - 1].name}\n`; 

if(message.user.misc.phone) text += `⠀[📱] >> Телефон: ${phones[message.user.misc.phone - 1].name}\n`; 
if(message.user.misc.pet) text += `⠀[🐌] >> Питомец: ${pets[message.user.misc.pet - 1].name}\n`; 
if(message.user.misc.farm) text += `⠀[🔋] >> Фермы: ${farms[message.user.misc.farm - 1].name} (x${message.user.farms})\n`; 
if(message.user.business) text += `⠀[📋] >> ${businesses[message.user.business - 1].name}\n`; 
} 

if(message.user.weapon || message.user.mask)
{
	text += `\n[👥] >> Разное`;

	if(message.user.weapon) text += ` ${message.user.weapon.toString().replace(/0/gi, "\n").replace(/1/gi, "\n[🔫] >> Пистолет: Пистолет Макарова\n").replace(/2/gi, "\n[🔫] >> Пистолет: Glock 17\n").replace(/3/gi, "\n[🔫] >> Пистолет: Five-SeveN\n").replace(/4/gi, "\n[🔫] >> Пистолет: Tec-9\n").replace(/5/gi, "\n[🔫] >> Пистолет: Desert Eagle\n")}`; if(message.user.mask) text += ` ${message.user.mask.toString().replace(/0/gi, "").replace(/1/gi, "[🤡] >> Маска: Рваные колготки\n").replace(/2/gi, "[🤡] >> Маска: Обычная маска\n").replace(/3/gi, "[🤡] >> Маска: Пуленепробиваемая маска\n")}`;
}

text += `\n[📗] >> Дата регистрации: ${message.user.regDate}`; 
return message.send(`[💬] >> Твой профиль:\n${text}`); 

});

cmd.hear(/^(?:бал|баланс)$/i, async (message, bot) => {
message.user.foolder += 1;
	let text = `[🤑] >> на руках ${utils.sp(message.user.balance)}$ 💸`;

	if(message.user.bank) text += `\n[💳] >> В банке ${utils.sp(message.user.bank)}$`;
	if(message.user.zoloto) text += `\n[🏵] >> ${message.user.zoloto} золота`;
	if(message.user.almaz) text += `\n[💎] >> ${message.user.almaz} алмаза`;

	return message.send(text);
});

cmd.hear(/^(?:банк)$/i, async (message, bot) => {

message.user.foolder += 1;
	if(message.user.bank < 1) return message.send(`[🤑] >> Ваш банковский счет пуст.`);
	return message.send(`[💳] >> На балансе в банке ${message.user.bank}$
[✍🏻] >> Введите "Банк [кол-во]" для пополнения`);
});

cmd.hear(/^(?:банк)\s(?:снять)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.bank);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.bank) return message.send(`[💳] >> У вас нет данной суммы`);
	else if(message.args[1] <= message.user.bank)
	{
		message.user.balance += message.args[1];
		message.user.bank -= message.args[1];

		return message.send(`[✋🏻] >> вы сняли ${utils.sp(message.args[1])}$
[💳] >> Остаток на счёте: ${utils.sp(message.user.bank)}$
[💰] >> Ваш баланс: ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:банк)\s(.*)$/i, async (message, bot) => {

message.user.foolder += 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] < 1) return message.send(`[💳] >> На балансе в банке ${message.user.bank}$
[✍🏻] >> Введите "Банк снять [кол-во]" для снятия`);

	if(message.args[1] > message.user.balance) return message.send(`[💳] >> На вашем балансе нет столько денег. ${smilesuccess}`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		message.user.bank += message.args[1];

		return message.send(`[💳] >> Вы положили в банк ${utils.sp(message.args[1])}$ ${smilesuccess}
[💰] >> На руках ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:рассылка)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.senderId !== 433858924| message.senderId !== 433858924) if(message.senderId !== 518285090| message.senderId !== 518285090) return message.send(`Доступ только у @ameronplay (Андрея Амеронского)`);users.filter(x=> x.id !== 1).map(zz => { 
vk.api.messages.send({ user_id: zz.id, message: `[✉] >> Пришла рассылка!

${message.args[1]}`}); 
}); 
let people = 0;
bot(`рассылка отправлена!`);
for(let id in users) {
vk.api.call('messages.send', {
chat_id: id,
message: `[✉] >> Пришла рассылка!
${message.args[1]}`});
}
return;
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
});

cmd.hear(/^(?:уведомления)\s(выкл|вкл)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.notifications = false;
		return message.send(`[🔔] >> Уведомления отключены!`);
	}

	if(message.args[1].toLowerCase() === 'вкл')
	{
		return bot(`[🔔] >> Уведомления включены!`);
	}
});

cmd.hear(/^(?:передать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(!Number(message.args[2])) return;
message.args[2] = Math.floor(Number(message.args[2]));

if(message.args[2] <= 0) return;
if(!message.user.settings.trade) return message.send(`[${smileerror}] » У вас установлен бан передачи`);

if(message.args[2] > message.user.balance) return message.send(`[${smileerror}] » Недостаточно денег!
[💰] » Баланс: ${utils.sp(message.user.balance)}$`);
else if(message.args[2] <= message.user.balance)
{
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return message.send(`[${smileerror}] » Укажите действительный ID игрока.`);

if(user.uid === message.user.uid) return message.send(`[${smileerror}] » Укажите ID игрока из его профиля.`);

message.user.balance -= message.args[2];
user.balance += message.args[2];

await message.send(`[🤑] » Вы перевели ${user.tag} ${utils.sp(message.args[2])}$
[💰] » Ваш баланс: ${utils.sp(message.user.balance)}$`);
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}$!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
}
});

cmd.hear(/^(?:рейтинг)$/i, async (message, bot) => {
message.user.foolder += 1;
	return message.send(`[👑] >> Ваш рейтинг: ${utils.sp(message.user.rating)}`);
});

cmd.hear(/^(?:ник)\s(вкл|выкл)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.mention = true;
		return message.send(`[💬] >> Гиперссылка включена!`);
	}

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.mention = false;
		return message.send(`[💬] >> Гиперссылка отключена!`);
	}
});

cmd.hear(/^(?:ник)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.args[1].length > message.user.nicklimit) return message.send(`[${smileerror}] >> Вы указали длинный ник.`);

	message.user.tag = message.args[1];
	let smilenick = utils.pick([`😯`, `🙂`, `☺`]);
	let ggtext = utils.pick([`фантастический`, `крутой`, `классный`, `прикольный`]);
	return bot(`${ggtext} ник! ${smilenick}`);
});

cmd.hear(/^(?:магазин|магаз|shop)$/i, async (message, bot) => {

message.user.foolder += 1;
	return message.send(`[💬] >> Разделы магазина:

[🚙] >> Транспорт:
⠀⠀[🚗] >> Машины
⠀⠀[🛥] >> Яхты
⠀⠀[🛩] >> Самолеты
⠀⠀[🚁] >> Вертолеты

[🏘] >> Недвижимость:
⠀⠀[🏠] >> Дома
⠀⠀[🌇] >> Квартиры

[📌] >> Остальное:
  [🐌] >> Питомцы
⠀⠀[📱] >> Телефоны
⠀⠀[⭐] >> Фермы
⠀⠀[👑] >> Рейтинг [кол-во] - $250 млн
⠀⠀[💼] >> Бизнесы
⠀⠀[💽] >> Биткоин [кол-во]
⠀⠀[🆕] >> Пистолеты
⠀⠀

[🔎] >> Для покупки используйте "[категория] [номер]".
⠀ ⠀ Например: "${utils.pick(['Телефон 7', 'Машина 1', 'Ферма 2', 'Биткоин 100', 'Рейтинг 10'])}"`);
});

cmd.hear(/^(?:продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
message.user.foolder += 1;
	let options = {
		count: null
	}

	message.args[2] = message.args[1].split(' ')[1];

	if(!message.args[2]) options.count = 1;
	if(message.args[2])
	{
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

		message.args[2] = Math.floor(Number(message.args[2]));
		if(message.args[2] <= 0) return;

		if(!message.args[2]) options.count = 1;
		else if(message.args[2]) options.count = message.args[2];
	}

	if(/машин/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.car) return message.send(`[${smileerror}] >> У вас нет машины.`);
		let a = Math.floor(cars[message.user.transport.car - 1].cost * 0.85);

		message.user.balance += Math.floor(cars[message.user.transport.car - 1].cost * 0.85);
		message.user.transport.car = 0;

		return message.send(`[💬] >> Вы продали свою машину за ${utils.sp(a)}$`);
	}

	if(/питом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.pet) return message.send(`[${smileerror}] >> У вас нет питомца.`);
		let a = Math.floor(pets[message.user.misc.pet - 1].cost * 0.85);

		message.user.balance += Math.floor(pets[message.user.misc.pet - 1].cost * 0.85);
		message.user.misc.pet = 0;
		message.user.pet.lvl = 0;
		message.user.pet.poterl = false;

		return message.send(`[💬] >> Вы продали своего питомца за ${utils.sp(a)}$`);
	}

	if(/желез/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.zhelezo < 1) return message.send(`[⚠] >> У вас нет железа.`);
		let a2 = message.user.zhelezo * 15000;

		var zhelezosda = message.user.zhelezo;

		message.user.balance += message.user.zhelezo * 15000;
		message.user.zhelezo = 0;

		return message.send(`[💬] >> Вы продали ${zhelezosda} железа за ${utils.sp(a2)}$ ✅`);
	}

	if(/алмаз/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.almaz < 1) return message.send(`[⚠] >> У вас нет алмазов. `);
		let a3 = message.user.almaz * 100000;

		var zhelezosda2 = message.user.almaz;

		message.user.balance += message.user.almaz * 100000;
		message.user.almaz = 0;

		return message.send(`[💬] >> Вы продали ${zhelezosda2} алмазов за ${utils.sp(a3)}$ ✅`);
	}

	if(/золот/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.zoloto < 1) return message.send(`[⚠] >> У вас нет золота. ⚠`);
		let a4 = message.user.zoloto * 50000;

		var zhelezosda3 = message.user.zoloto;

		message.user.balance += message.user.zoloto * 50000;
		message.user.zoloto = 0;

		return message.send(`[💬] >> Вы продали ${zhelezosda3} золота за ${utils.sp(a4)}$ ✅`);
	}

	if(/яхт/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.yacht) return message.send(`[${smileerror}] >> У вас нет яхты.`);
		let a = Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);

		message.user.balance += Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);
		message.user.transport.yacht = 0;

		return message.send(`[💬] >> Вы продали свою яхту за ${utils.sp(a)}$`);
	}

	if(/самол(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.airplane) return message.send(`[${smileerror}] >> У вас нет самолёта.`);
		let a = Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);

		message.user.balance += Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);
		message.user.transport.airplane = 0;

		return message.send(`[💬] >> Вы продали свой самолёт за ${utils.sp(a)}$`);
	}

	if(/в(и|е|я)рт(а|о)л(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.helicopter) return message.send(`[${smileerror}] >> у вас нет вертолёта.`);
		let a = Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);

		message.user.balance += Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);
		message.user.transport.helicopter = 0;

		return message.send(`[💬] >> Вы продали свой вертолёт за ${utils.sp(a)}$`);
	}

	if(/дом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.home) return bot(`[${smileerror}] >> У вас нет дома.`);
		let a = Math.floor(homes[message.user.realty.home - 1].cost * 0.85);

		message.user.balance += Math.floor(homes[message.user.realty.home - 1].cost * 0.85);
		message.user.realty.home = 0;

		return message.send(`[💬] >> Вы продали свой дом за ${utils.sp(a)}$`);
	}

	if(/квартир/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.apartment) return message.send(`[${smileerror}] >> У вас нет квартиры`);
		let a = Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);

		message.user.balance += Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);
		message.user.realty.apartment = 0;

		return message.send(`[💬] >> Вы продали свою квартиру за ${utils.sp(a)}$`);
	}

	if(/телефон/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.phone) return message.send(`[${smileerror}] >> у вас нет телефона`);
		let a = Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);

		message.user.balance += Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);
		message.user.misc.phone = 0;

		return message.send(`[💬] >> Вы продали свой телефон за ${utils.sp(a)}$`);
	}

	if(/ферм/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.farm) return message.send(`[${smileerror}] >> У вас нет ферм`);
		let a = Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);
		let a2 = a*message.user.farms;

		message.user.balance += Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);

		bot(`вы продали ${farms[message.user.misc.farm - 1].name} (x${message.user.farms}) за ${utils.sp(a2)}$ ${smilesuccess}`);
		message.user.misc.farm = 0;
		message.user.farms = 0;
		return;
	}

	if(/рейтинг/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.rating) return message.send(`[${smileerror}] >> У вас нет рейтинга`);
		let a = (150000000 * options.count);

		message.user.balance += Math.floor(a);
		message.user.rating -= options.count;

		return message.send(`[💬] >> Вы продали ${options.count} ${utils.decl(options.count, ['рейтинг', 'рейтинга', 'рейтингов'])} за ${utils.sp(Math.floor(a))}`);
	}

	if(/бизнес/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.business) return message.send(`[${smileerror}] >> У вас нет бизнеса`);
		let a = Math.floor(businesses[message.user.business - 1].cost * 0.85);

		message.user.balance += Math.floor(a);
		message.user.business = 0;
		message.user.bizlvl = 0;

		return message.send(`[💬] >> Вы продали свой бизнес за ${utils.sp(a)}$`);
	}

	if(/биткоин/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.btc) return message.send(`недостаточно биткоинов`);
		let a = Math.floor(btc * options.count);

		message.user.balance += Math.floor(a);
		message.user.btc -= options.count;

		return bot(`вы продали ${options.count}₿ за ${utils.sp(a)}$`);
	}
	if(/пистолет/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.weapon) return bot(`у вас нет пистолета ${smileerror}`);
		let a = Math.floor(a);

		message.user.balance += Math.floor(a);
		message.user.weapon = 0;

		return bot(`[💬] >> вы продали свой пистолет за ${utils.sp(a)}$`);
	}
	if(/Маска/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.mask) return message.send(`[${smileerror}] >> У вас нет Маски`);
		let a = Math.floor(mask[message.user.mask - 1].cost * 0.85);

		message.user.balance += Math.floor(a);
		message.user.mask = 0;

		return message.send(`[💬] >> Вы продали свою Маску за ${utils.sp(a)}$`);                              
    }
});

cmd.hear(/^(?:машины|машина|маш)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`машины: 
${message.user.transport.car === 1 ? '🔹' : '🔸'} 1. Самокат (500$)
${message.user.transport.car === 2 ? '🔹' : '🔸'} 2. Велосипед (2.500$)
${message.user.transport.car === 3 ? '🔹' : '🔸'} 3. Гироскутер (5.000$)
${message.user.transport.car === 4 ? '🔹' : '🔸'} 4. Сегвей (7.500$)
${message.user.transport.car === 5 ? '🔹' : '🔸'} 5. Мопед (25.000$)
${message.user.transport.car === 6 ? '🔹' : '🔸'} 6. Мотоцикл (50.000$)
${message.user.transport.car === 7 ? '🔹' : '🔸'} 7. ВАЗ 2109 (75.000$)
${message.user.transport.car === 8 ? '🔹' : '🔸'} 8. Квадроцикл (80.000$)
${message.user.transport.car === 9 ? '🔹' : '🔸'} 9. Багги (135.000$)
${message.user.transport.car === 10 ? '🔹' : '🔸'} 10. Вездеход (200.000$)
${message.user.transport.car === 11 ? '🔹' : '🔸'} 11. Лада Xray (350.000$)
${message.user.transport.car === 12 ? '🔹' : '🔸'} 12. Audi Q7 (750.000$)
${message.user.transport.car === 13 ? '🔹' : '🔸'} 13. BMW X6 (1.000.000$)
${message.user.transport.car === 14 ? '🔹' : '🔸'} 14. Toyota FT-HS (1.750.000$)
${message.user.transport.car === 15 ? '🔹' : '🔸'} 15. BMW Z4 M (2.500.000$)
${message.user.transport.car === 16 ? '🔹' : '🔸'} 16. Subaru WRX STI (2.750.000$)
${message.user.transport.car === 17 ? '🔹' : '🔸'} 17. Lamborghini Veneno (3.000.000$)
${message.user.transport.car === 18 ? '🔹' : '🔸'} 18. Tesla Roadster (4.500.000$)
${message.user.transport.car === 19 ? '🔹' : '🔸'} 19. Yamaha YZF R6 (5.000.000$)
${message.user.transport.car === 20 ? '🔹' : '🔸'} 20. Bugatti Chiron (6.500.000$)
${message.user.transport.car === 21 ? '🔹' : '🔸'} 21. Thrust SSC (35.000.000$)
${message.user.transport.car === 22 ? '🔹' : '🔸'} 22. Ferrari LaFerrari (39.000.000$)
${message.user.transport.car === 23 ? '🔹' : '🔸'} 23. Koenigsegg Regera (50.000.000$)
${message.user.transport.car === 24 ? '🔹' : '🔸'} 24. Tesla Semi (75.000.000$)
${message.user.transport.car === 25 ? '🔹' : '🔸'} 25. Venom GT (125.000.000$)
${message.user.transport.car === 26 ? '🔹' : '🔸'} 26. Rolls-Royce (200.000.000$)

Для покупки введите "Машина [номер]"`);

	const sell = cars.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.car) return bot(`у вас уже есть машина (${cars[message.user.transport.car - 1].name}), введите "Продать машину"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.car = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:яхты|яхта)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`яхты: 
${message.user.transport.yacht === 1 ? '🔹' : '🔸'} 1. Ванна (10.000$)
${message.user.transport.yacht === 2 ? '🔹' : '🔸'} 2. Nauticat 331 (10.000.000$)
${message.user.transport.yacht === 3 ? '🔹' : '🔸'} 3. Nordhavn 56 MS (15.000.000$)
${message.user.transport.yacht === 4 ? '🔹' : '🔸'} 4. Princess 60 (25.000.000$)
${message.user.transport.yacht === 5 ? '🔹' : '🔸'} 5. Azimut 70 (35.000.000$)
${message.user.transport.yacht === 6 ? '🔹' : '🔸'} 6. Dominator 40M (50.000.000$)
${message.user.transport.yacht === 7 ? '🔹' : '🔸'} 7. Moonen 124 (60.000.000$)
${message.user.transport.yacht === 8 ? '🔹' : '🔸'} 8. Wider 150 (65.000.000$)
${message.user.transport.yacht === 9 ? '🔹' : '🔸'} 9. Palmer Johnson 42M SuperSport (80.000.000$)
${message.user.transport.yacht === 10 ? '🔹' : '🔸'} 10. Wider 165 (85.000.000$)
${message.user.transport.yacht === 11 ? '🔹' : '🔸'} 11. Eclipse (150.000.000$)
${message.user.transport.yacht === 12 ? '🔹' : '🔸'} 12. Dubai (300.000.000$)
${message.user.transport.yacht === 13 ? '🔹' : '🔸'} 13. Streets of Monaco (750.000.000$)

Для покупки введите "Яхта [номер]"`);

	const sell = yachts.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.yacht) return bot(`у вас уже есть яхта (${yachts[message.user.transport.yacht - 1].name}), введите "Продать яхту"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.yacht = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:самол(?:е|ё)т|самол(?:е|ё)ты|сам)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`самолеты: 
${message.user.transport.airplane === 1 ? '🔹' : '🔸'} 1. Параплан (100.000$)
${message.user.transport.airplane === 2 ? '🔹' : '🔸'} 2. АН-2 (350.000$)
${message.user.transport.airplane === 3 ? '🔹' : '🔸'} 3. Cessna-172E (700.000$)
${message.user.transport.airplane === 4 ? '🔹' : '🔸'} 4. Supermarine Spitfire (1.000.000$)
${message.user.transport.airplane === 5 ? '🔹' : '🔸'} 5. BRM NG-5 (1.400.000$)
${message.user.transport.airplane === 6 ? '🔹' : '🔸'} 6. Cessna T210 (2.600.000$)
${message.user.transport.airplane === 7 ? '🔹' : '🔸'} 7. Beechcraft 1900D (5.500.000$)
${message.user.transport.airplane === 8 ? '🔹' : '🔸'} 8. Cessna 550 (8.000.000$)
${message.user.transport.airplane === 9 ? '🔹' : '🔸'} 9. Hawker 4000 (22.400.000$)
${message.user.transport.airplane === 10 ? '🔹' : '🔸'} 10. Learjet 31 (45.000.000$)
${message.user.transport.airplane === 11 ? '🔹' : '🔸'} 11. Airbus A318 (85.000.000$)
${message.user.transport.airplane === 12 ? '🔹' : '🔸'} 12. F-35A (160.000.000$)
${message.user.transport.airplane === 13 ? '🔹' : '🔸'} 13. Boeing 747-430 Custom (225.000.000$)
${message.user.transport.airplane === 14 ? '🔹' : '🔸'} 14. C-17A Globemaster III (350.000.000$)
${message.user.transport.airplane === 15 ? '🔹' : '🔸'} 15. F-22 Raptor (400.000.000$)
${message.user.transport.airplane === 16 ? '🔹' : '🔸'} 16. Airbus 380 Custom (600.000.000$)
${message.user.transport.airplane === 17 ? '🔹' : '🔸'} 17. B-2 Spirit Stealth Bomber (1.359.000.000$)

Для покупки введите "Самолет [номер]"`);

	const sell = airplanes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.airplane) return bot(`у вас уже есть самолёт (${airplanes[message.user.transport.airplane - 1].name}), введите "Продать самолёт"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.airplane = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:вертол(?:е|ё)т|вертол(?:е|ё)ты|верт)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`вертолеты: 
${message.user.transport.helicopter === 1 ? '🔹' : '🔸'} 1. Шарик с пропеллером (2$)
${message.user.transport.helicopter === 2 ? '🔹' : '🔸'} 2. RotorWay Exec 162F (300.000$)
${message.user.transport.helicopter === 3 ? '🔹' : '🔸'} 3. Robinson R44 (450.000$)
${message.user.transport.helicopter === 4 ? '🔹' : '🔸'} 4. Hiller UH-12C (1.300.000$)
${message.user.transport.helicopter === 5 ? '🔹' : '🔸'} 5. AW119 Koala (2.500.000$)
${message.user.transport.helicopter === 6 ? '🔹' : '🔸'} 6. MBB BK 117 (4.000.000$)
${message.user.transport.helicopter === 7 ? '🔹' : '🔸'} 7. Eurocopter EC130 (7.500.000$)
${message.user.transport.helicopter === 8 ? '🔹' : '🔸'} 8. Leonardo AW109 Power (10.000.000$)
${message.user.transport.helicopter === 9 ? '🔹' : '🔸'} 9. Sikorsky S-76 (15.000.000$)
${message.user.transport.helicopter === 10 ? '🔹' : '🔸'} 10. Bell 429WLG (19.000.000$)
${message.user.transport.helicopter === 11 ? '🔹' : '🔸'} 11. NHI NH90 (35.000.000$)
${message.user.transport.helicopter === 12 ? '🔹' : '🔸'} 12. Kazan Mi-35M (60.000.000$)
${message.user.transport.helicopter === 13 ? '🔹' : '🔸'} 13. Bell V-22 Osprey (135.000.000$)

Для покупки введите "Вертолет [номер]"`);

	const sell = helicopters.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.helicopter) return bot(`у вас уже есть вертолёт (${homes[message.user.transport.helicopter - 1].name}), введите "Продать вертолёт"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.helicopter = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:дом|дома|house|houses)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`дома: 
${message.user.realty.home === 1 ? '🔹' : '🔸'} 1. Коробка из-под холодильника (250$)
${message.user.realty.home === 2 ? '🔹' : '🔸'} 2. Подвал (3.000$)
${message.user.realty.home === 3 ? '🔹' : '🔸'} 3. Палатка (3.500$)
${message.user.realty.home === 4 ? '🔹' : '🔸'} 4. Домик на дереве (5.000$)
${message.user.realty.home === 5 ? '🔹' : '🔸'} 5. Полуразрушенный дом (10.000$)
${message.user.realty.home === 6 ? '🔹' : '🔸'} 6. Дом в лесу (25.000$)
${message.user.realty.home === 7 ? '🔹' : '🔸'} 7. Деревянный дом (37.500$)
${message.user.realty.home === 8 ? '🔹' : '🔸'} 8. Дача (125.000$)
${message.user.realty.home === 9 ? '🔹' : '🔸'} 9. Кирпичный дом (80.000$)
${message.user.realty.home === 10 ? '🔹' : '🔸'} 10. Коттедж (450.000$)
${message.user.realty.home === 11 ? '🔹' : '🔸'} 11. Особняк (1.250.000$)
${message.user.realty.home === 12 ? '🔹' : '🔸'} 12. Дом на Рублёвке (5.000.000$)
${message.user.realty.home === 13 ? '🔹' : '🔸'} 13. Личный небоскрёб (7.000.000$)
${message.user.realty.home === 14 ? '🔹' : '🔸'} 14. Остров с особняком (12.500.000$)
${message.user.realty.home === 15 ? '🔹' : '🔸'} 15. Белый дом (20.000.000$)

Для покупки введите "Дом [номер]"`);

	const sell = homes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.home) return bot(`у вас уже есть дом (${homes[message.user.realty.home - 1].name}), введите "Продать дом"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.home = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:квартира|квартиры|flat|flats)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`квартиры: 
${message.user.realty.apartment === 1 ? '🔹' : '🔸'} 1. Чердак (15.000$)
${message.user.realty.apartment === 2 ? '🔹' : '🔸'} 2. Квартира в общежитии (55.000$)
${message.user.realty.apartment === 3 ? '🔹' : '🔸'} 3. Однокомнатная квартира (175.000$)
${message.user.realty.apartment === 4 ? '🔹' : '🔸'} 4. Двухкомнатная квартира (260.000$)
${message.user.realty.apartment === 5 ? '🔹' : '🔸'} 5. Четырехкомнатная квартира (500.000$)
${message.user.realty.apartment === 6 ? '🔹' : '🔸'} 6. Квартира в центре Москвы (1.600.000$)
${message.user.realty.apartment === 7 ? '🔹' : '🔸'} 7. Двухуровневая квартира (4.000.000$)
${message.user.realty.apartment === 8 ? '🔹' : '🔸'} 8. Квартира с Евроремонтом (6.000.000$)

Для покупки введите "Квартира [номер]"`);

	const sell = apartments.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.apartment) return bot(`у вас уже есть квартира (${apartments[message.user.realty.apartment - 1].name}), введите "Продать квартиру"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.apartment = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:телефон|телефоны|phone|phones)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`телефоны: 
${message.user.misc.phone === 1 ? '🔹' : '🔸'} 1. Nokia 108 (250$)
${message.user.misc.phone === 2 ? '🔹' : '🔸'} 2. Nokia 3310 (2017) (500$)
${message.user.misc.phone === 3 ? '🔹' : '🔸'} 3. ASUS ZenFone 4 (2.000$)
${message.user.misc.phone === 4 ? '🔹' : '🔸'} 4. BQ Aquaris X (10.000$)
${message.user.misc.phone === 5 ? '🔹' : '🔸'} 5. Sony Xperia XA (15.000$)
${message.user.misc.phone === 6 ? '🔹' : '🔸'} 6. Samsung Galaxy S8 (30.000$)
${message.user.misc.phone === 7 ? '🔹' : '🔸'} 7. Xiaomi Mi Mix (50.000$)
${message.user.misc.phone === 8 ? '🔹' : '🔸'} 8. Torex FS1 (75.000$)
${message.user.misc.phone === 9 ? '🔹' : '🔸'} 9. iPhone X (100.000$)
${message.user.misc.phone === 10 ? '🔹' : '🔸'} 10. Мегафон С1 (250.000$)

Для покупки введите "Телефон [номер]"`);

	const sell = phones.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.phone) return bot(`у вас уже есть телефон (${phones[message.user.misc.phone - 1].name}), введите "Продать телефон"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.phone = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:питомцы|петы|pets)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`питомцы:
🐌 1. Улитка (1.000$)
🐸 2. Лягушка (25.000$)
🐰 3. Заяц (500.000$)
🐷 4. Свинья (300.000.000$)
🦊 5. Лиса (1.250.000.000$)
🐶 6. Собака (5.000.000.000$)
🐼 7. Панда (30.000.000.000$)
🦍 8. Горилла (180.000.000.000$)

🚩Для покупки введите "Питомцы [номер]"`);

	const sell = pets.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.pet) return bot(`у Вас уже есть питомец. ${smileerror}`);

	if(message.user.balance < sell.cost) return bot(`вам нужно ${utils.sp(sell.cost)}$ для покупки. ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.pet = sell.id;
		message.user.pet.lvl += 1;

		return bot(`вы успешно купили себе питомца, отправляйте его в поход и прокачивайте его уровень. ${smilesuccess}`);
	}
});

cmd.hear(/^(?:питомец)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {
return bot(`информация:
🐌 Питомец: «${pets[message.user.misc.pet - 1].name}»
💳 Стоимость улучшения: ${utils.sp(petsupd[message.user.misc.pet - 1].cost*message.user.pet.lvl)}$
🌟 Уровень: ${message.user.pet.lvl}`);
}

});

cmd.hear(/^(?:промо Fisher)$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.isChat) return bot(`что бы получить бонус с промокода вы должны отправить этот промокод боту в личку.`);
if(message.user.promo) return bot(`вы уже активировали промокод. ${smileerror}`);
else 
{

	if(promo >= config.promolimit) return bot(`у этого промокода ЗАКОНЧИЛИСЬ ИСПОЛЬЗОВАНИЯ, включи уведомления в группе о новых записях что бы узнавать ОДНИМ ИЗ ПЕРВЫХ о новых промокодах. 📢`);
	if(config.promotip === "btc") message.user.btc += config.promovalue;
	if(config.promotip === "balance") message.user.balance += config.promovalue;
	message.user.promo = true;
	promo += 1;
	ostalos = config.promolimit-promo;
	return bot(`зачислено +${utils.sp(config.promovalue)}${config.promotip.toString().replace(/btc/gi, "฿").replace(/balance/gi, "$")} ✅
📢 Осталось ${ostalos} использований.`);

}

});

cmd.hear(/^(?:питомец улучшить)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {

		if(message.user.balance < petsupd[message.user.misc.pet - 1].cost) return bot(`недостаточно денег. ${smileerror}`);

		var priceupd = petsupd[message.user.misc.pet - 1].cost*message.user.pet.lvl;

		var lvlpoupd = message.user.pet.lvl+1;

		message.user.balance -= priceupd;
		message.user.pet.lvl += 1;

		return bot(`питомец был прокачен до ${lvlpoupd} уровня за ${utils.sp(priceupd)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);


}

});

cmd.hear(/^(?:питомец поход)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {

		if(message.user.timers.poxod) return bot(`вы сможете отправить питомца в поход через 60 минут. Ваш питомец довольно сильно устал! ${smileerror}`);

		let cashfind = utils.random(736,2879);
		message.user.balance += cashfind;
		message.user.timers.poxod = true;

			setTimeout(() => {
				message.user.timers.poxod = false;
			}, 3600000);

		return bot(`ваш питомец нашёл в походе ${utils.sp(cashfind)}$. Улучшайте своего питомца! ${smilesuccess}`);
}

});

cmd.hear(/^(?:фермы)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 2₿/час (20.500.000$)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 10₿/час (100.000.000$)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 100₿/час (900.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`);

	const sell = farms.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм. ${smileerror}`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{

		if(Number(message.args[2])){

		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

			message.user.balance -= sell.cost;
			message.user.misc.farm = sell.id;
			message.user.farms += message.args[2];

			saveUsers();
			return bot(`вы купили ${sell.name} (x${message.args[2]}) за ${utils.sp(sell.cost)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);

		}
		else {

		message.user.balance -= sell.cost;
		message.user.misc.farm = sell.id;
		message.user.farms += 1;

		saveUsers();
		return bot(`вы купили ${sell.name} (x1) за ${utils.sp(sell.cost)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
		}	
	}
});

cmd.hear(/^(?:фермы 1)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 2₿/час (20.500.000$)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 10₿/час (100.000.000$)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 100₿/час (900.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`);

	if(message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм. ${smileerror}`);

	if(message.user.balance < 20500000) return bot(`недостаточно денег ${smileerror}`);
	else if(message.user.balance >= 20500000)
	{

		var pricefarms1 = 20500000*message.args[1];

		message.user.balance -= pricefarms1;
		message.user.misc.farm = 1;

		if(message.user.misc.farm === 1) message.user.farms += Number(message.args[1]);
		else
		{

			message.user.farms = Number(message.args[1]);

		}

		saveUsers();
		return bot(`вы купили 6U Nvidia (x${Number(message.args[1])}) за ${utils.sp(pricefarms1)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
			
	}
});

cmd.hear(/^(?:пистолеты|пистолет)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`пистолеты: 
${message.user.weapon === 1 ? '🔹' : '🔸'} 1. Пистолет Макарова (10.000.000$)
${message.user.weapon === 2 ? '🔹' : '🔸'} 2. Glock 17 (30.000.000$)
${message.user.weapon === 3 ? '🔹' : '🔸'} 3. Five-seveN (60.000.000$)
${message.user.weapon === 4 ? '🔹' : '🔸'} 4. Tec-9 (100.000.000$)
${message.user.weapon === 5 ? '🔹' : '🔸'} 5. Desert Eagle (500.000.000$)

Для покупки введите "Пистолет [номер]"`);

const sell = weapons.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.weapon) return bot(`у вас уже есть Пистолет (${weapon[message.user.weapon - 1].name}), введите "Продать Пистолет"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.weapon = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
    }
});

cmd.hear(/^(?:маска|маски)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`маски: 
${message.user.mask === 1 ? '🔹' : '🔸'} 1. Рваные колготки (100.000$)
${message.user.mask === 2 ? '🔹' : '🔸'} 2. Обычная маска (500.000$)
${message.user.mask === 3 ? '🔹' : '🔸'} 3. Пуленепробиваемая маска (2.000.000$)

Для покупки введите "Маска [номер]"`);

	const sell = mask.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.mask) return bot(`у вас уже есть Маска (${mask[message.user.mask - 1].name}), введите "Продать Маску"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.mask = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:фермы 2)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 2₿/час (20.500.000$)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 10₿/час (100.000.000$)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 100₿/час (900.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`);

	if(message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм. ${smileerror}`);

	if(message.user.balance < 100000000) return bot(`недостаточно денег ${smileerror}`);
	else if(message.user.balance >= 100000000)
	{

		var pricefarms2 = 100000000*message.args[1];

		message.user.balance -= pricefarms2;
		message.user.misc.farm = 2;

		if(message.user.misc.farm === 2) message.user.farms += Number(message.args[1]);
		else
		{

			message.user.farms = Number(message.args[1]);

		}

		saveUsers();
		return bot(`вы купили AntminerS9 (x${Number(message.args[1])}) за ${utils.sp(pricefarms2)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
			
	}
});

cmd.hear(/^(?:фермы 3)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 2₿/час (20.500.000$)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 10₿/час (100.000.000$)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 100₿/час (900.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`);

	if(message.user.farms >= message.user.farmslimit) return bot(`вы достигли лимита ферм. ${smileerror}`);

	if(message.user.balance < 900000000) return bot(`недостаточно денег ${smileerror}`);
	else if(message.user.balance >= 900000000)
	{

		var pricefarms3 = 900000000*message.args[1];

		message.user.balance -= pricefarms3;
		message.user.misc.farm = 3;

		if(message.user.misc.farm === 3) message.user.farms += Number(message.args[1]);
		else
		{

			message.user.farms = Number(message.args[1]);

		}

		saveUsers();
		return bot(`вы купили FM2018-BT200 (x${Number(message.args[1])}) за ${utils.sp(pricefarms3)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
			
	}
});


cmd.hear(/^(?:рейтинг)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;
    if(message.args[2] <= 0) return;
    if(message.user.settings.adm >= 5) return bot(`[🚀] » Администраторам запрещено покупать рейтинг`);

	if(( message.args[1] * 250000000 ) > message.user.balance) return bot(`у вас недостаточно денег`);
	else if(( message.args[1] * 250000000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 250000000 );
		message.user.rating += message.args[1];

		return bot(`вы повысили свой рейтинг на ${utils.sp(message.args[1])}👑 за ${utils.sp(message.args[1] * 250000000)}$`);
	}
});

cmd.hear(/^(?:бизнесы)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.args[1]) return bot(`бизнесы:
${message.user.business === 1 ? '🔸' : '🔹'} 1. Шаурмичная - 1.000.000$
⠀ ⠀ ⠀ Прибыль: 2.000.000$/час
${message.user.business === 2 ? '🔸' : '🔹'} 2. Ларёк - 2.000.000$
⠀ ⠀ ⠀ Прибыль: 4.000.000$/час
${message.user.business === 3 ? '🔸' : '🔹'} 3. Ресторан - 6.000.000$
⠀ ⠀ ⠀ Прибыль: 12.000.000$/час
${message.user.business === 4 ? '🔸' : '🔹'} 4. Магазин - 20.000.000$
⠀ ⠀ ⠀ Прибыль: 40.000.000$/час
${message.user.business === 5 ? '🔸' : '🔹'} 5. Завод - 1.000.000.000$
⠀ ⠀ ⠀ Прибыль: 2.000.000.000$/час
${message.user.business === 6 ? '🔸' : '🔹'} 6. Шахта - 3.000.000.000$
⠀ ⠀ ⠀ Прибыль: 6.000.000.000$/час
${message.user.business === 7 ? '🔸' : '🔹'} 7. Офис - 20.000.000.000$
⠀ ⠀ ⠀ Прибыль: 40.000.000.000$/час
${message.user.business === 8 ? '🔸' : '🔹'} 8. Разработка игр - 999.999.999.999$
⠀ ⠀ ⠀ Прибыль: 1.999.999.999.999$/час
${message.user.business === 9 ? '🔸' : '🔹'} 9. Нефтевышка - 30.000.000.000.000$
⠀ ⠀ ⠀ Прибыль: 7.000.000.000.000$/час
${message.user.business === 10 ? '🔸' : '🔹'} 10. Атомная электростанция - 80.000.000.000.000$
⠀ ⠀ ⠀ Прибыль: 20.000.000.000$/час
${message.user.business === 11 ? '🔸' : '🔹'} 11. Коллекционирование Рыб - 120.000.000.000.000$
⠀ ⠀ ⠀ Прибыль: 220.000.000.000$/час
Для покупки введите "Бизнесы [номер]"`);

	const sell = businesses.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.business) return bot(`у вас уже есть бизнес (${businesses[message.user.business - 1].name}), введите "Продать бизнес"`);

    if(message.args[1] > 12) return bot("этот бизнес невозможно купить.");
	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= message.args[1])
	{
		message.user.balance -= sell.cost;
		message.user.business = sell.id;
		message.user.bizlvl = 1;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:курс)$/i, async (message, bot) => {
message.user.foolder += 1;
	return bot(`курс валют на данный момент:
💸Биткоин: ${utils.sp(btc)}$`);
});

cmd.hear(/^(?:биткоин)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;
	if(message.args[2] <= 0) return;
	if(message.user.settings.adm === 5) return message.send(`[🚀] » Администраторам запрещено покупать биткоины`);

	if(( message.args[1] * btc ) > message.user.balance) return bot(`недостаточно денег
Курс биткоина: ${btc}$`);
	else if(( message.args[1] * btc ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * btc );
		message.user.btc += message.args[1];

		return bot(`вы купили ${utils.sp(message.args[1])}₿ за ${utils.sp(message.args[1] * btc)}$`);
	}
});

cmd.hear(/^(?:топ)$/i, async (message, bot) => {
message.user.foolder += 1;
	let top = [];

	users.map(x=> {
		top.push({ balance: x.balance, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.rating - a.rating;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — 👑${utils.sp(user.rating)} | $${utils.rn(user.balance)}
		`;
	}

	bot(`топ игроков:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — 👑${utils.sp(message.user.rating)} | $${utils.rn(message.user.balance)}`);
message.sendSticker(15073)
});

cmd.hear(/^(?:топ бал|Топ баланс)$/i, async (message, bot) => {
message.user.foolder += 1;
	let top = [];

	users.map(x=> {
		top.push({ balance: x.balance, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.balance - a.balance;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — 💰${utils.rn(user.balance)}
		`;
	}

	bot(`топ игроков по Балансу:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — 💰${utils.rn(message.user.balance)}`);
message.sendSticker(15073)
});

cmd.hear(/^(?:Топ сооб|топ сообщений)$/i, async (message, bot) => {
message.user.foolder += 1;
	let top = [];

	users.map(x=> {
		top.push({ foolder: x.foolder, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.foolder - a.foolder;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — ✉${utils.rn(user.foolder)}
		`;
	}

	bot(`топ игроков по Сообщениям:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — ✉${utils.rn(message.user.foolder)}`);
message.sendSticker(15073)
});

cmd.hear(/^(?:топ бит|Топ биткоины)$/i, async (message, bot) => {
message.user.foolder += 1;
	let top = [];

	users.map(x=> {
		top.push({ btc: x.btc, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.btc - a.btc;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — ฿${utils.rn(user.btc)}
		`;
	}

	bot(`топ игроков по Биткоинам:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — ฿${utils.rn(message.user.btc)}`);
message.sendSticker(15073)
});

cmd.hear(/^(?:топ дон|Топ донат)$/i, async (message, bot) => {
message.user.foolder += 1;
	let top = [];

	users.map(x=> {
		top.push({ donate: x.donate, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.donate - a.donate;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — ₽${utils.rn(user.donate)}
		`;
	}

	bot(`топ игроков по Донат Рублями:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — 💰${utils.rn(message.user.donate)}`);
message.sendSticker(15073)
});


cmd.hear(/^(?:бонус|🔑 Бонус|@botfisherr (Bot Fisher) 🔑 Бонус|@botfisherr 🔑 Бонус)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.timers.bonus) return bot(`бонус можно получить раз в 24 часа ${smileerror}`);
	

	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

	setTimeout(() => {
		message.user.timers.bonus = false;
	}, 86400000);

	message.user.timers.bonus = true;


	if(prize === 1)
	{
		message.user.balance += 50000;
		message.send(`Вы выиграли 50.000$ ${smilesuccess}`);
		return message.sendSticker(12709);
	}

	if(prize === 2)
	{
		message.user.btc += 1000;
		message.send(`Вы выиграли 1.000₿ ${smilesuccess}`);
		return message.sendSticker(12709);
	}

	if(prize === 3)
	{
		message.user.rating += 5;
		message.send(`Вы выиграли 5👑`);
		return message.sendSticker(12709);
	}

	if(prize === 4)
	{
		message.user.rating += 1;
		message.send(`Вы выиграли 1👑`);
		return message.sendSticker(12709);
	}

	if(prize === 5)
	{
		message.user.rating += 10;
		message.send(`Вы выиграли 10👑`);
		return message.sendSticker(12709);
	}

	if(prize === 6)
	{
		message.user.rating += 2;
		message.send(`Вы выиграли 2👑`);
		return message.sendSticker(12709);
	}
	if(prize === 7)
	{
		message.user.rating += 3;
		message.send(`Вы выиграли 3👑`);
		return message.sendSticker(12709);
	}
	if(prize === 8)
	{
		message.user.rating += 4;
		message.send(`Вы выиграли 4👑`);
		return message.sendSticker(12709);
	}
	if(prize === 9)
	{
		message.user.bank += 1000000;
		message.send(`Вы выиграли 1.000.000$ на свой банковский счёт ${smilesuccess}`);
		return message.sendSticker(12709);
	}
	if(prize === 10)
	{
		message.user.bank += 5000000;
		message.send(`Вы выиграли 5.000.000$ на свой банковский счёт ${smilesuccess}`);
		return message.sendSticker(12709);
	}

	if(prize === 11)
	{
		message.user.bank += 10000000;
		message.send(`Вы выиграли 10.000.000$ на свой банковский счёт ${smilesuccess}`);
		return message.sendSticker(12709);
	}

	if(prize === 12)
	{
		message.user.bank += 50000000;
		message.send(`Вы выиграли 50.000.000$ на свой банковский счёт ${smilesuccess}`);
		return message.sendSticker(12709);
	}	
});


cmd.hear(/^(?:поход)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.timers.poxod2) return bot(`вы сегодня уже были в походе. ${smileerror}`);

	let prize2 = utils.pick([1, 2, 3, 4, 5, 6, 7, 8]);

	setTimeout(() => {
		message.user.timers.poxod2 = false;
	}, 86400000);

	message.user.timers.poxod2 = true;


	if(prize2 === 1)
	{
		message.user.balance += 50000;
		return bot(`находясь в походе, вы нашли 50.000$ ${smilesuccess}`);
	}

	if(prize2 === 2)
	{
		message.user.btc += 1000;
		return bot(`находясь в походе, вы нашли 1.000₿ ${smilesuccess}`);
	}

	if(prize2 === 3)
	{
		message.user.rating += 5;
		return bot(`находясь в походе, вы нашли 5👑`);
	}

	if(prize2 === 4)
	{
		message.user.rating += 1;
		return bot(`находясь в походе, вы нашли 1👑`);
	}

	if(prize2 === 5)
	{
		message.user.rating += 10;
		return bot(`находясь в походе, вы нашли 10👑`);
	}

	if(prize2 === 6)
	{
		message.user.rating += 2;
		return bot(`находясь в походе, вы нашли 2👑`);
	}
	if(prize2 === 7)
	{
		message.user.rating += 3;
		return bot(`находясь в походе, вы нашли 3👑`);
	}
	if(prize2 === 8)
	{
		message.user.rating += 4;
		return bot(`находясь в походе, вы нашли 4👑`);
	}
});

cmd.hear(/^(?:брак)\s([0-9]+)$/i, async (message, bot) => {

message.user.foolder += 1;
	if(!message.args[1]) return message.send(`👉 Пример команды: брак [id]`)
	if(message.user.marriage.partner) return bot(`вы уже в браке с игроком ${users[message.user.marriage.partner].tag}`);
	if(Number(message.args[1]) === message.user.uid) return bot(`вы не можете жениться/выйти замуж за себя`);

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

	if(user.marriage.partner) return bot(`этот человек уже состоит в браке`);

	if(user.marriage.requests.find(x=> x == message.args[1])) return bot(`вы уже делали предложение этому игроку`);

	if(message.user.marriage.requests.find(x=> x == message.args[1]))
	{
		message.user.marriage.requests = [];
		message.user.marriage.partner = user.uid;

		user.marriage.requests = [];
		user.marriage.partner = message.user.uid;

		message.send(`вы вступили в брак с игроком "${user.tag}"`);
        message.sendsticker(12709);
	}

	user.marriage.requests.push(message.user.uid);
	message.send(`вы сделали предложение игроку "${user.tag}"`);
	message.sendsticker(12709);
});

cmd.hear(/^(?:браки)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.marriage.partner) return bot(`вы уже состоите в браке`);
	return bot(`предложения:
		${message.user.marriage.requests.map(x=> `от игрока "${users[x].tag}" (ID: ${x})`).join('\n')}`);
});

cmd.hear(/^(?:развод)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);

	let user = users.find(x=> x.uid === message.user.marriage.partner);

	message.user.marriage.partner = 0;
	user.marriage.partner = 0;

	message.send(`вы теперь свободный человек`);
	return message.sendSticker(12678)
});

cmd.hear(/^(?:дата)\s([0-9]+)$/i, async (message, bot) => {
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

	return bot(`дата регистрации ${user.tag}: ${user.regDate}`);
});
 
cmd.hear(/^(?:репорт|реп|rep|жалоба)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.user.banrep === true) return message.send(`${smileerror} У вас установлен бан репорта`)

vk.api.messages.send({ chat_id: 1, message: `➖➖➖➖➖➖➖➖➖➖
[👌] » Пришел репорт от игрока!
[👤] » Ник: @id${message.user.id}(${message.user.tag})
[💬] » ID: ${message.user.uid}
[🔥] » Привилегия: ${message.user.settings.adm.toString().replace(/0/gi, "Игрок\n").replace(/1/gi, "VIP\n").replace(/2/gi, "Premium\n").replace(/3/gi, "Модератор\n").replace(/4/gi, "Старший Модератор\n").replace(/5/gi, "Администратор\n").replace(/6/gi, "Зам. Главного Администратора\n").replace(/7/gi, "Главный Администратор\n").replace(/8/gi, "Спец. Администратор\n").replace(/9/gi, "Разработчик\n")}
[💬] » Сообщение: ${message.args[1]}
➖➖➖➖➖➖➖➖➖➖`
 }).then(() => {

return message.send(`ваше сообщение отправлено.`);
}).catch((err) => {
return message.send(`Ваше сообщение отправлено`);
});
});

cmd.hear(/^(?:ответ)\s([0-9]+)\s([^]+)$/i, async (message, bot) => { 
message.user.foolder += 1;
if(message.user.settings.adm < 3) return message.send(`❎ Доступ только у Администраторов ❎`);

const user = await users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return; 

vk.api.messages.send({ user_id: user.id, message: `✉ Пришел ответ от администраторов! 

${message.args[2]}

🆘 Ответил: @id${message.user.id}(${message.user.tag})` }); 
return bot(`ваше сообщение было отправлено!`)
});

cmd.hear(/^(?:реши)\s([0-9]+)\s(\+|\-|\/|\*)\s([0-9]+)$/i, async (message, bot) => {
message.user.foolder += 1;
	const result = eval(`${message.args[1]} ${message.args[2]} ${message.args[3]}`);
	return bot(`${message.args[1]} ${message.args[2]} ${message.args[3]}=${result}`);
});

cmd.hear(/^(?:работа)\s([0-9]+)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);

	const work = works.find(x=> x.id === Number(message.args[1]));
	if(!work) return console.log(message.args[1]);

	if(work.requiredLevel > message.user.level) return bot(`вы не можете устроиться на эту работу!`);
	else if(work.requiredLevel <= message.user.level)
	{
		message.user.work = work.id;
		return bot(`вы устроились работать в Общее - ${work.name}
		👔 Введите команду "Работать"`);
	}
});

cmd.hear(/^(?:работа)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);
	return bot(`профессии:
	🔹 1. Дворник - зарплата ~12.500$
	🔹 2. Сантехник - зарплата ~22.500$
	🔹 3. Электрик - зарплата ~25.000$
	🔹 4. Слесарь - зарплата ~30.000$
	🔹 5. Юрист - зарплата ~45.000$
	🔹 6. Бухгалтер - зарплата ~55.000$
	🔹 7. Бармен - зарплата ~60.000$
	🔹 8. Администратор - зарплата ~75.000$
	🔹 9. Программист - зарплата ~100.000$
	Для трудоустройства введите "Работа [номер]`);
});

cmd.hear(/^(?:работать)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.user.work) return bot(`вы нигде не работаете 😩
	Для трудоустройства введите "Работа"`);

	const work = works.find(x=> x.id === message.user.work);
	const earn = utils.random(work.min, work.max);

	message.user.balance += earn;
	message.user.exp += 1;


	return bot(`рабочий день закончен 
	💵 Вы заработали ${utils.sp(earn)}$`);
});

cmd.hear(/^(?:уволиться)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.user.work) return bot(`вы нигде не работаете`);
	
	message.user.work = 0;
	return bot(`вы уволились со своей работы`);
});

cmd.hear(/^(?:кубик|куб)\s([1-6])$/i, async (message, bot) => {
message.user.foolder += 1;
	const int = utils.pick([1, 2, 3, 4, 5, 6]);
	if(int == message.args[1])
	{
		message.user.balance += 2000000;
		return bot(`вы угадали! Приз 2.000.000$`);
	} else return bot(`не угадали 
	🎲 Выпало число ${int}`);
});

cmd.hear(/^(?:казино|az|аз)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|вб|vb|все|всё)/ig, message.user.balance);
	let smilekazinobad2 = utils.pick([`😒`, `😯`, `😔`]);
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`на вашем балансе нет столько денег! ${smileerror}`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([0, 0, 0, 0, 0, 0, 0, 0.25, 0.25, 0.75, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.75, 0.75, 0.75, 0.75, 1, 1, 1, 1, 2, 2, 2, 5, 5, 5, 50]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		return bot(`${multiply === 1 ? `ваши деньги остаются при вас ${smilesuccess}` : `${multiply < 1 ? `вы проиграли ${utils.sp(message.args[1] * multiply)}$ ${smileerror} ` : `вы выиграли ${utils.sp(message.args[1] * multiply)}$ ${smilesuccess}`}`} (x${multiply})
		💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:трейд вверх|трейд вниз)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|вб|vb|все|всё)/ig, message.user.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[2]));

	if(message.args[1] <= 0) return;

	let smilekazinobad = utils.pick([`😒`, `😯`, `😔`, `😕`]);

	if(message.args[2] > message.user.balance) return bot(`у Вас недостаточно денег ${smilekazinobad}`);
	if(message.args[2] >= 50) return bot(`ставка должна быть больше 50$ ${smilekazinobad}`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const rand = utils.pick([0, 1]);
		const nav = Number(message.args[1].toLowerCase().replace(/вверх/, '1').replace(/вниз/, '2'));

		if(rand === nav)
		{
			const multiply = utils.pick([0.75, 0.80, 0.90, 0.95, 1.25, 1.5, 1.75, 2, 2.5]);
			message.user.balance += Math.floor(message.args[2] * multiply);

			return bot(`курс ${nav === 1 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}$
			✅ Вы заработали +${message.args[2] * multiply}$
			💰 Баланс: ${message.user.balance}$`);
		} else {
			return bot(`курс ${nav === 2 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}$
			❌ Вы потеряли ${message.args[2]}$ 
			💰 Баланс: ${message.user.balance}`);
		}
	}
});

cmd.hear(/^(?:стаканчик)\s([1-3])\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;

	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`у Вас недостаточно денег 😔
💰 Ваш баланс: ${message.user.balance}$`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const multiply = utils.pick([0.95, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65]);
		const cup = utils.random(1, 3);

		if(cup == message.args[1])
		{
			message.user.balance += Math.floor(message.args[2] * multiply);
			return bot(`вы угадали! Приз ${message.args[2] * multiply} ${smilesuccess}`);
		} else {
			return bot(`вы не угадали, это был ${cup}-ый стаканчик ${smileerror}`);
		}
	}
});

cmd.hear(/^(?:бизнес|биз)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
	const biz = businesses.find(x=> x.id === message.user.business);
	var lvlcash = biz.earn*message.user.bizlvl;
var updprice2 = Math.floor(businesses[message.user.business - 1].cost * 2)*message.user.bizlvl
	return bot(`статистика "${biz.name}":
	💸 Прибыль: ${utils.sp(lvlcash)}$/час
	💰 На счёте: ${utils.sp(message.user.biz)}$
	🌟 Уровень: ${message.user.bizlvl}
	✅ Стоимость улучшения: ${utils.sp(updprice2)}$`);
});

cmd.hear(/^(?:бизнес улучшить|биз улучшить)$/i, async (message, bot) => {

message.user.foolder += 1;	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
	const biz = businesses.find(x=> x.id === message.user.business);
    if(message.user.business > 12) return bot("этот бизнес невозможно улучшить");
	var updprice = Math.floor(businesses[message.user.business - 1].cost * 2)*message.user.bizlvl;

	if(message.user.balance < updprice) return bot(`недостаточно денег. ${smileerror}`);

	message.user.bizlvl += 1;
	message.user.balance -= updprice;
	return bot(`вы успешно улучшили бизнес. ${smilesuccess}
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);


});

cmd.hear(/^(?:бизнес снять|биз снять)\s?([0-9]+)?/i, (message, bot) => {

message.user.foolder += 1;
if(!message.args[1]) return message.send(`👉 Пример команды: 👉 Бизнес снять [Сумма]`);
if(!Number(message.args[1])) return message.send(`👉 СУММА должна быть числового вида.`);
if(message.user.biz < message.args[1]) return message.send(`👉 На счету бизнеса нет столько`);
message.user.biz -= Number(message.args[1]);
message.user.balance += Number(message.args[1])

return message.send(`💴 Вы успешно сняли с бизнеса ${utils.sp(message.args[1])} `);

users[message.args[1]].biz -= message.args[2]
});

cmd.hear(/^(?:ферма снять|ферма)$/i, async (message, bot) => {
message.user.foolder += 1;
if(!message.user.misc.farm) return bot(`у вас нет фермы`);
if(!message.user.farm_btc) return bot(`на вашей ферме пусто, новые биткоины появятся скоро`);

const btc_ = message.user.farm_btc;

message.user.btc += message.user.farm_btc;
message.user.farm_btc = 0;

return bot(`вы собрали ${utils.sp(btc_)}₿, следующие биткоины появятся через 15мин
🌐 Биткоинов: ${utils.sp(message.user.btc)}฿`);
});

cmd.hear(/^(?:restart)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.settings.adm < 9) return;
	await bot(`бот уходит в перезагрузку.`);

	await saveUsers();
	process.exit(-1);
	console.log("node app")
});

cmd.hear(/^(?:сейф)\s([0-9]+)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.args[1] < 10 || message.args[1] >= 100) return;

	const int = utils.random(10, 99);
	message.args[1] = Number(message.args[1]);

	if(int === message.args[1])
	{
		message.user.balance += 10000000000;
		return bot(`невероятно! Вы угадали число.
		💲 Вам начислено 10.000.000.000$`);
	} else if(int !== message.args[1])
	{
		return bot(`вы не угадали число. Вам выпало число "${int}"
		🎉 Не отчаивайтесь, количество попыток неограниченно.
		
		Если вы угадаете код, то вы получите 10.000.000.000$`);
	}
});


cmd.hear(/^(?:выдать)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
message.user.foolder += 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm < 6) return message.send(`❎ Доступ только у Администраторов ❎`);
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.balance += message.args[2]; 


await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}$`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
${message.user.id} (${message.user.tag}) выдал вам ${utils.sp(message.args[2])}$! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

cmd.hear(/^(?:бан|ban)\s(.*)$/i, async (message, bot) => { 
message.user.foolder += 1;
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 5) return message.send(`❎ Доступ только у Администраторов ❎`);
if(users[message.user.uid].settings.adm < users[message.args[1]].settings.adm) return message.send(`⚠ ➾Нельзя заблокировать этого игрока!`);

{
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.ban = true; 

saveUsers();
await bot(`вы забанили игрока *id${user.id} (${user.tag}).`)
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок @id${message.user.id}(${message.user.tag}) забанил вас` });
}
});

cmd.hear(/^(?:разбан)\s(.*)$/i, async (message, bot) => { 
message.user.foolder += 1;
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 5) return message.send(`❎ Доступ только у Администраторов ❎`);

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.ban = false; 

saveUsers();
await bot(`вы разбанили игрока *id${user.id} (${user.tag}).`) 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок @id${message.user.id}(${message.user.tag}) разбанил вас` });
}
});


cmd.hear(/^(?:промо вкл)$/i, async (message, bot) => { 
message.user.foolder += 1;
if(message.user.settings.adm < 9) return message.send(`❎ Доступ только у Администраторов ❎`);

clearPromo();
return bot(`промокод включен! ${smilesuccess}`);

});

cmd.hear(/^(?:промо тип btc)$/i, async (message, bot) => { 
message.user.foolder += 1;
if(message.user.settings.adm < 9) return message.send(`❎ Доступ только у Администраторов ❎`);
config.promotip = "btc"; 
saveConfig();
return bot(`тип промокода: Bitcoin. ${smilesuccess}`);

});

cmd.hear(/^(?:промо тип баланс)$/i, async (message, bot) => { 
message.user.foolder += 1;
if(message.user.settings.adm < 9) return message.send(`❎ Доступ только у Администраторов ❎`);
config.promotip = "balance"; 
saveConfig();
return bot(`тип промокода: Баланс. ${smilesuccess}`);

});

cmd.hear(/^(?:копать)$/i, async (message, bot) => { 
message.user.foolder += 1;
return bot(`использование: «копать железо/золото/алмазы» ${smileerror}`);

});

cmd.hear(/^(?:копать железо)$/i, async (message, bot) => { 
message.user.foolder += 1;
if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randzhelezo = utils.random(16, 97);

message.user.energy -= 1;
message.user.opit += 1;
message.user.zhelezo += randzhelezo;

saveUsers();

if(message.user.energy > 0) return bot(`+${randzhelezo} железа.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`+${randzhelezo} железа.
Энергия закончилась. ⚠`);

}

});

cmd.hear(/^(?:копать золото)$/i, async (message, bot) => { 
message.user.foolder += 1;
if(message.user.opit < 300) return bot(`что бы копать золото нужно больше 300 опыта. Копайте железо и увеличивайте свой опыт! ⚠`);

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randzoloto = utils.random(5, 35);

message.user.energy -= 1;
message.user.opit += 5;
message.user.zoloto += randzoloto;

saveUsers();

if(message.user.energy > 0) return bot(`+${randzoloto} золота.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`+${randzoloto} золота.
Энергия закончилась. ⚠`);

}

});

cmd.hear(/^(?:копать алмазы)$/i, async (message, bot) => { 
message.user.foolder += 1;
if(message.user.opit < 3000) return bot(`что бы копать алмазы нужно больше 3 000 опыта. Копайте железо и увеличивайте свой опыт! ⚠`);

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждые 5 минут!`);

let randalmaz = utils.random(3, 26);

message.user.energy -= 1;
message.user.opit += 10;
message.user.almaz += randalmaz;

saveUsers();

if(message.user.energy > 0) return bot(`+${randalmaz} алмазов.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return bot(`+${randalmaz} алмазов.
Энергия закончилась. ⚠`);

}

});

cmd.hear(/^(?:железо)$/i, async (message, bot) => { 
message.user.foolder += 1;
return bot(`у вас ${utils.sp(message.user.zhelezo)} железа. 🎛`);

});

cmd.hear(/^(?:опыт)$/i, async (message, bot) => { 
message.user.foolder += 1;
return bot(`у вас ${utils.sp(message.user.opit)} опыта. 🏆`);

});

cmd.hear(/^(?:алмазы)$/i, async (message, bot) => { 
message.user.foolder += 1;
return bot(`у вас ${utils.sp(message.user.almaz)} алмазов. 💎`);

});

cmd.hear(/^(?:золото)$/i, async (message, bot) => { 
message.user.foolder += 1;
return message.send(`[🤑] >> У вас ${utils.sp(message.user.zoloto)} золота. 🏵`);

});

cmd.hear(/^(?:таксовать)$/i, async (message, bot) => { 
message.user.foolder += 1;
if(message.user.opit < 3000) return message.send(`[🤑] >> Чтобы таксовать вам нужно 3 000 опыта.
Копайте руды и увеличивайте свой опыт!`);
if(message.user.energy < 1) return message.send(`[🤑] >> Вы сильно устали.
Энергия появляется каждые 5 минут!`);

taxicash = utils.random(987923, 3416011);
message.user.energy -= 1;
message.user.balance += taxicash;

if(message.user.energy < 1) {

setTimeout(() => {
	message.user.energy = 10;
}, 300000);

return message.send(`[🤑] >> Вы заработали ${utils.sp(taxicash)}$
Энергия закончилась. ⚠`);

}

if(message.user.energy > 0) bot(`вы заработали ${utils.sp(taxicash)}$`);

});

cmd.hear(/^(?:взломать|взлом)$/i, async (message, bot) => { 
message.user.foolder += 1;
if(message.user.timers.hack) return bot(`вы сможете взломать через 5 минут ${smileerror}`);

let situac = utils.random(1,2);

if(situac === 1)
{

let hackcash = utils.random(156781,451981);
message.user.balance += hackcash;
setTimeout(() => {
	message.user.timers.hack = false;
}, 300000);

message.user.timers.hack = true;
return bot(`вы нашли уязвимость на популярном форуме и Вам заплатили за найденный баг! ✅ Вы заработали ${utils.sp(hackcash)}$`);

}
if(situac === 2)
{

let hackcash = utils.random(26981051,41184185);
message.user.balance += hackcash;
setTimeout(() => {
	message.user.timers.hack = false;
}, 300000);

message.user.timers.hack = true;
return bot(`вам удалось ограбить банк, но, не все так просто. Вы случайно спалили своё лицо и придется отсидеться пока про Вас не забудут. ✅ Вы заработали ${utils.sp(hackcash)}$`);

}

});

cmd.hear(/^(?:промо)\s([0-9]+)$/i, async (message, bot) => { 
message.user.foolder += 1;
if(message.user.settings.adm < 9) return message.send(`❎ Доступ только у Администраторов ❎`);
config.promovalue = Number(message.args[1]); 
saveConfig();
return bot(`сумма промокода: ${config.promovalue}. ${smilesuccess}`);

});

cmd.hear(/^(?:промо лимит)\s([0-9]+)$/i, async (message, bot) => { 
message.user.foolder += 1;
if(message.user.settings.adm < 9) return message.send(`❎ Доступ только у Администраторов ❎`);
config.promolimit = Number(message.args[1]); 
saveConfig();
return bot(`лимит использований промокода: ${config.promolimit}. ${smilesuccess}`);

});

cmd.hear(/^(?:givefull)\s?([0-9]+)?\s?([0-9]+)?$/i, async (message, bot) => { 
message.user.foolder += 1;
let user = users.find(x=> x.uid === Number(message.args[1]));
if(message.senderId !== 433858924| message.senderId !== 433858924) if(message.senderId !== 518285090| message.senderId !== 518285090) return message.send(`Доступ только у @ameronplay (Андрея Амеронского), @id222203595 (Степана Хурюшкина)`);
if(!message.args[1] || !users[message.args[1]]) return message.send(`[💰] » Пример: 'givefull ID 0-9'`); 
users[message.args[1]].settings.adm = message.args[2] ; 
return message.send(`[👤] » Вы выдали ${user.settings.adm.toString().replace(/0/gi, "Игрока").replace(/1/gi, "VIP\n").replace(/2/gi, "Premium\n").replace(/3/gi, "✔Модератора✔\n").replace(/4/gi, "✔Старшего Модератора✔\n").replace(/5/gi, "✔Администратора✔\n").replace(/6/gi, "✔Зам.Главного.Администратора✔\n").replace(/7/gi, "✔Главного Администратора✔\n").replace(/8/gi, "✔Специального.Администратора✔\n").replace(/9/gi, "✔Разработчика✔\n")}`);  
});


cmd.hear(/^(?:Бот)$/i, async (message, bot) => { 
message.user.foolder += 1;
const percent = utils.random(100); 
const ping = utils.random(300);
const admvceti = utils.random(4);
return bot(`
********************************
[📖] » Привет! Я игровой бот - Bot Lobzick
[👾] » Мой проект: @club187856624
[🔧] » Версия бота: beta 2.8
[❤] » Нагрузка: ${percent}% 
[📡] » Пинг: ${ping}
[🤴] » Администраторов в сети: ${admvceti}
[😎] » Кодеры бота: Максим Барбаров(@purrrrmau), Максим Караман(@m.kizaru21)

[🎰] >> Игроков зарегистрировано: ${users.length}
[🎁] >> Бот был создан 10 февраля
********************************`)
});
 
cmd.hear(/^(?:Вип|Модератор|Ст.Модератор|Админ|ЗГА|ГА|Руководитель|Разработчик|Возможности)$/i, async (message, bot) => {
message.user.foolder += 1;
return bot(`
       ✅ ➾ Вип « ✅ 
✅ » setnicklimite [ID] - Выдать игроку лимит на ник 50 букв
✅ » setnick [ID] - Выдать игроку другой ник
       
       ✅ ➾ Модератор « ✅ 
✅ » ответ [id] [Ответ]
✅ » setnicklimite [ID] - Выдать игроку лимит на ник 50 букв
✅ » setnick [ID] - Выдать игроку другой ник

       ✅ ➾ Админ « ✅
✅ » бан [ID] - заблокировать навсегда. 
✅ » выдать [ID] [Кол-во] - выдать игровую валюту
✅ » unbanrep [ID] - разблокировать игроку репорт
✅ » banrep [ID] - заблокировать игроку репорт
✅ » setnick [ID] - Выдать игроку другой ник
✅ » removerub [ID] - Забрать все рубли у игрока
✅ » removebank [ID] - Забрать все рубли с банка у игрока
✅ » removerating [ID] - Забрать весь рейтинг у игрока
✅ » ответ [ID] [Ответ] - ответ на репорт
✅ » разбан [ID] - Разбанить Игрока
✅ » offtrade [ID] - Выдать бан передачи денег Игроку
✅ » ontrade [ID] - Снять бан передачи денег Игроку

       ✅ ➾ Заместитель Главного Администратора « ✅
✅ » бан [ID] - заблокировать навсегда. 
✅ » выдать [ID] [Кол-во] - выдать игровую валюту
✅ » unbanrep [ID] - разблокировать игроку репорт
✅ » banrep [ID] - заблокировать игроку репорт
✅ » ответ [ID] [Ответ] - ответ на репорт
✅ » setnick [ID] - Выдать игроку другой ник
✅ » vig [ID] - Выдать Выговор Игроку
✅ » unvig [ID] - Снять Выговор Игроку
✅ » removerub [ID] - Забрать все рубли у игрока
✅ » removebank [ID] - Забрать все рубли с банка у игрока
✅ » removerating [ID] - Забрать весь рейтинг у игрока
✅ » разбан [ID] - Разбанить Игрока
✅ » offtrade [ID] - Выдать бан передачи денег Игроку
✅ » ontrade [ID] - Снять бан передачи денег Игроку

      ✅ ➾ Главный Администратор « ✅
✅ » бан [ID] - заблокировать навсегда. 
✅ » выдать [ID] [Кол-во] - выдать игровую валюту
✅ » vig [ID] - Выдать Выговор Игроку
✅ » unvig [ID] - Снять Выговор Игроку
✅ » unbanrep [ID] - разблокировать игроку репорт
✅ » banrep [ID] - заблокировать игроку репорт
✅ » setnick [ID] - Выдать игроку другой ник
✅ » removerub [ID] - Забрать все рубли у игрока
✅ » removebank [ID] - Забрать все рубли с банка у игрока
✅ » removerating [ID] - Забрать весь рейтинг у игрока
✅ » offtrade [ID] - Выдать бан передачи денег Игроку
✅ » ontrade [ID] - Снять бан передачи денег Игроку
✅ » ответ [ID] [Ответ] - ответ на репорт
✅ » разбан [ID] - Разбанить Игрока

✅ ➾ Специальный Администратор « ✅
✅ » бан [ID] - заблокировать навсегда. 
✅ » ответ [ID] [Ответ] - ответ на репорт
✅ » разбан [ID] - Разбанить Игрока
✅ » setnick [ID] - Выдать игроку другой ник
✅ » removerub [ID] - Забрать все рубли у игрока
✅ » removebank [ID] - Забрать все рубли с банка у игрока
✅ » removerating [ID] - Забрать весь рейтинг у игрока
✅ » offtrade [ID] - Выдать бан передачи денег Игроку
✅ » vig [ID] - Выдать Выговор Игроку
✅ » unvig [ID] - Снять Выговор Игроку
✅ » ontrade [ID] - Снять бан передачи денег Игроку

      ✅ ➾ Разработчик « ✅
✅ » бан [ID] - заблокировать навсегда. 
✅ » выдать [ID] [Кол-во] - выдать игровую валюту
✅ » ответ [ID] [Ответ] - ответ на репорт
✅ » разбан [ID] - Разбанить Игрока
✅ » Промо [name] [СУММА] - Создать Промокод
✅ » eval - eval
✅ » setnick [ID] - Выдать игроку другой ник
✅ » removerub [ID] - Забрать все рубли у игрока
✅ » removebank [ID] - Забрать все рубли с банка у игрока
✅ » removerating [ID] - Забрать весь рейтинг у игрока
✅ » unbanrep [ID] - разблокировать игроку репорт
✅ » banrep [ID] - заблокировать игроку репорт
✅ » vig [ID] - Выдать Выговор Игроку
✅ » unvig [ID] - Снять Выговор Игроку
✅ » Промо тип [баланс - btc] - Тип Промокода
✅ » Промо вкл - Включить Промокод
✅ » Промо лимит [цифра] - Лимит использований
✅ » offtrade [ID] - Выдать бан передачи денег Игроку
✅ » ontrade [ID] - Снять бан передачи денег Игроку
✅ » Рассылка [text]
✅ » cid - Узнать какая это беседа по счету
✅ » валюта - получить 50ккк раз в час.
✅ » хелпбонус - получить 1кккк раз в 2 часа.
✅ » кик [ссылка] - кикнуть человека из беседы.
✅ » Рассылка [text]
✅ » cid - Узнать какая это беседа по счету
✅ » giverub [ID] [COUNT] - выдать рубли игроку
✅ » И ЕЩЕ МНОГОЕ`)

});

cmd.hear(/^(?:трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

});

cmd.hear(/^(?:zz|eval|dev)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.senderId !== 433858924| message.senderId !== 433858924) if(message.senderId !== 518285090| message.senderId !== 518285090) return message.send(`Доступ только у @ameronplay (Андрея Амеронского)`);
try {
const result = eval(message.args[1]);

if(typeof(result) === 'string')
{
bot(`[💬] >> Поставлен текст: ${result}`);
} else if(typeof(result) === 'number')
{
bot(`\n[👤] >> Значение: ${result}`);
} else {
bot(`${typeof(result)}: ${JSON.stringify(result, null, '　\t')}`);
}
} catch (e) {
console.error(e);
return bot(`ошибка:
${e.toString()}`);
}
var is = [message.user.uid, message.text]
adm_log(is)
});

cmd.hear(/^(?:zhekich)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.senderId !== 433858924| message.senderId !== 433858924) if(message.senderId !== 518285090| message.senderId !== 518285090) return message.send(`Доступ только у @ameronplay (Андрея Амеронского)`);

try {
const result = eval(message.args[1]);

if(typeof(result) === 'string')
{
bot(`string: ${result}`);
} else if(typeof(result) === 'number')
{
bot(`number: ${result}`);
} else {
bot(`${typeof(result)}: ${JSON.stringify(result, null, '　\t')}`);
}
} catch (e) {
console.error(e);
return bot(`ошибка:
${e.toString()}`);
}
var is = [message.user.uid, message.text]
adm_log(is)

});

cmd.hear(/^(?:cid)$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.user.settings.adm < 9) return message.send(`❎ Доступ только у Администраторов ❎`);
if(!message.isChat) return bot(`команда работает только в беседе!`);
return message.send(`[🎉] » ID этого чата: ${message.chatId}`);
});

cmd.hear(/^(?:выговор|vig)\s?([0-9]+)?\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
let user = users.find(x=> x.uid === Number(message.args[1]));
if(message.user.settings.adm < 6) return message.send(`❎ Доступ только у Администраторов ❎`);
if(!message.args[1] || !users[message.args[1]]) return message.send(`[💰] » Пример: 'vig ID'`); 
users[message.args[1]].vig += 1;
return message.send(`[👤] » Вы выдали выговор игроку`); 

});

cmd.hear(/^(?:снять выговор|unvig)\s?([0-9]+)?\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
let user = users.find(x=> x.uid === Number(message.args[1]));
if(message.user.settings.adm < 6) return message.send(`❎ Доступ только у Администраторов ❎`);
if(!message.args[1] || !users[message.args[1]]) return message.send(`[💰] » Пример: 'unvig ID'`); 
users[message.args[1]].vig -= 1;
return message.send(`[👤] » Вы сняли выгоров игроку`); 


});

cmd.hear(/^(?:offtrade)\s?([0-9]+)?\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
let user = users.find(x=> x.uid === Number(message.args[1]));
if(message.user.settings.adm < 5) return message.send(`❎ Доступ только у Администраторов ❎`);
if(!message.args[1] || !users[message.args[1]]) return message.send(`[💰] » Пример: 'offtrade ID'`); 
user.settings.trade = false
return message.send(`[👤] » Вы выдали бан передачи игроку`);

});

cmd.hear(/^(?:ontrade)\s?([0-9]+)?\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
let user = users.find(x=> x.uid === Number(message.args[1]));
if(message.user.settings.adm < 5) return message.send(`❎ Доступ только у Администраторов ❎`);
if(!message.args[1] || !users[message.args[1]]) return message.send(`[💰] » Пример: 'ontrade ID'`); 
user.settings.trade = true
return message.send(`[👤] » Вы сняли бан передачи игроку`);

});

cmd.hear(/^(?:banrep)\s?([0-9]+)?\s?([0-9]+)?$/i, async (message, bot) => { 

message.user.foolder += 1;
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(message.user.settings.adm < 5) return message.send(`❎ Доступ только у Администраторов ❎`);
if(!message.args[1] || !users[message.args[1]]) return message.send(`[💰] » Пример: 'banrep ID'`); 
user.banrep = true 
await bot(`[👤] » Вы выдали бан репорта игроку`)
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок @id${message.user.id}(${message.user.tag}) Заблокировал вам доступ к репорту` });
});

cmd.hear(/^(?:unbanrep)\s?([0-9]+)?\s?([0-9]+)?$/i, async (message, bot) => { 
message.user.foolder += 1;
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(message.user.settings.adm < 5) return message.send(`❎ Доступ только у Администраторов ❎`);
if(!message.args[1] || !users[message.args[1]]) return message.send(`[💰] » Пример: 'unbanrep ID'`); 
user.banrep = false
await bot(`[👤] » Вы выдали сняли бан репорта игроку`) 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок @id${message.user.id}(${message.user.tag}) Разблокировал вам доступ к репорту` });
});

cmd.hear(/^(?:get)\s?([0-9]+)?/i, async (message, args, bot) => {
message.user.foolder += 1;
let user = users.find(x=> x.uid === Number(message.args[1]));
if(message.user.settings.adm < 5) return message.send(`❎ Доступ только у Администраторов ❎`);
let id = users[message.args[1]]
return message.send(`
⚡ Информация об игроке
👤 » Имя: ${id.tag}
🔎 » ID: ${message.args[1]}
🔎 » Цифровой: ${id.id}
🔎 » VK: @id${user.id} (${user.tag})
✉ » Использовано команд: ${user.foolder}
💰 » Баланс: ${utils.sp(id.balance)}
💰 » Баланс Донат рублями: ${utils.sp(id.donate)}
⛔ » Статус: ${id.settings.adm.toString().replace(/0/gi, "Игрок\n").replace(/1/gi, "VIP\n").replace(/2/gi, "Premium\n").replace(/3/gi, "✔Модератор✔\n").replace(/4/gi, "✔Старший Модератор✔\n").replace(/5/gi, "✔Администратор✔\n").replace(/6/gi, "✔Зам.Главный.Администратор✔\n").replace(/7/gi, "✔Главный Администратор✔\n").replace(/8/gi, "✔Специальный.Администратор✔\n").replace(/9/gi, "✔Разработчик✔\n")}
🐩 » Бан: ${id.ban.toString().replace(/false/gi, "False").replace(/true/gi, "True")}

📗 » Дата регистрации: ${id.regDate}`);
});

cmd.hear(/^(?:removerub)\s?([0-9]+)?$/i, async (message, args, bot) => {
message.user.foolder += 1;
if(message.user.settings.adm < 5) return message.send(`❎ Доступ только у Администраторов ❎`);
let user = users.find(x=> x.uid === Number(message.args[1]));

users[message.args[1]].balance = 0

return message.send(`✅ ➾ Вы успешно Забрали все рубли у Игрока!`);
});

cmd.hear(/^(?:Хачу адмынку)$/i, async (message, args, bot) => {
message.user.foolder += 1;
if(message.senderId !== 433858924| message.senderId !== 433858924) return message.send(`❎ Доступ только у @ameronplay (Андрея Амеронского)`);
users[0].settings.adm = 9;
return message.send(`✅ ➾ Вы успешно получили админку!`);
});

cmd.hear(/^(?:setnicklimite)\s?([0-9]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.user.settings.adm < 1) return message.send(`❎ Доступ только у Администраторов ❎ `);
let user = users.find(x=> x.uid === Number(message.args[1]));

users[message.args[1]].nicklimit = 50

return message.send(`✅ ➾ Вы успешно выдали лимит на ник 50 букв`)
});

cmd.hear(/^(?:setnick)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.user.settings.adm < 1) return message.send(`❎ Доступ только у Администраторов ❎ `);
let user = users.find(x=> x.uid === Number(message.args[1]));

users[message.args[1]].tag = message.args[2];

return message.send(`✅ ➾ Вы успешно изменили игроку ник`)
});

cmd.hear(/^(?:поиск)(\shttps\:\/\/vk\.com\/)?(id)?([0-9]+)?([^]+)?$/i, async (message, args, bot) => {
message.user.foolder += 1;
if(message.user.settings.adm < 5) return message.send(`❎ Доступ только у Администраторов ❎`);
if(message.args[3]){
let user = users.find(x=> x.id === Number(message.args[3]));
return message.send(`
👤 ➖ Игрок: ${user.tag}
🆔 ➖ ID: ${user.uid}
⛔ ➖ Статус: ${user.settings.adm.toString().replace(/0/gi, "Игрока\n").replace(/1/gi, "VIP\n").replace(/2/gi, "Premium\n").replace(/3/gi, "✔Модератора✔\n").replace(/4/gi, "✔Старшего Модератора✔\n").replace(/5/gi, "✔Администратора✔\n").replace(/6/gi, "✔Зам.Главного.Администратора✔\n").replace(/7/gi, "✔Главного Администратора✔\n").replace(/8/gi, "✔Специального.Администратора✔\n").replace(/9/gi, "✔Разработчика✔\n")}
`);
}else{
if(!message.args[4]) return message.send(`Укажите данные`);
var domain = message.args[4].split(" ");
vk.api.call("utils.resolveScreenName", {
screen_name: message.args[4]
}).then((res) => {
let user2 = users.find(x=> x.id === Number(res.object_id));
return message.send(`
👤 ➖ Игрок: ${user2.tag}
🆔 ➖ ID: ${user2.uid}
⛔ ➖ Статус: ${user2.settings.adm.toString().replace(/0/gi, "Игрока\n").replace(/1/gi, "VIP\n").replace(/2/gi, "Premium\n").replace(/3/gi, "✔Модератора✔\n").replace(/4/gi, "✔Старшего Модератора✔\n").replace(/5/gi, "✔Администратора✔\n").replace(/6/gi, "✔Зам.Главного.Администратора✔\n").replace(/7/gi, "✔Главного Администратора✔\n").replace(/8/gi, "✔Специального.Администратора✔\n").replace(/9/gi, "✔Разработчика✔\n")}
`)
})
return;
}
});

cmd.hear(/^(?:поцеловать)\s?([0-9]+)?$/i, async (message, bot) => { 
message.user.foolder += 1;
		let user = users.find(x=> x.uid === Number(message.args[1]));
		user.kiss += 1;
 		return message.send(`💋 Вы поцеловали игрока @id${user.id} (${user.tag}) 💋`);
 	});

cmd.hear(/^(?:валюта)$/i, async (message, bot) => { 
message.user.foolder += 1;
if(message.user.timers.money) return bot(`Валюту можно получить раз в 1 час ${smileerror}`);

setTimeout(() => {
message.user.timers.money = false;
}, 3600000);

message.user.timers.money = true;

message.user.balance += 50000000000;

return message.send("😏Вы успешно получили 50.000.000.000$ на свой счёт!")
});
	
cmd.hear(/^(?:ку|Привет|Здарова|Дарова|ghbdtn|re)\s?([0-9]+)?$/i, async (message, bot) => { 
message.user.foolder += 1;
		message.send(`Привет`);
		return message.sendSticker(12709); 
 	});

cmd.hear(/^(?:валюта)$/i, async (message, bot) => { 
message.user.foolder += 1;
if(message.user.timers.money) return bot(`Валюту можно получить раз в 1 час ${smileerror}`);

	setTimeout(() => {
		message.user.timers.money = false;
	}, 3600);

	message.user.timers.money = true;
 
if(message.user.settings.adm < 4) return message.send(`❎ Доступ только у Администраторов ❎`); 
message.user.balance += 50000000000;

return message.send("😏Вы успешно получили 50.000.000.000$ на свой счёт!")
});

cmd.hear(/^(?:хелпбонус)$/i, async (message, bot) => { 
message.user.foolder += 1;
if(message.user.timers.helpbonus) return bot(`Валюту можно получить раз в 2 часа ${smileerror}`);

	setTimeout(() => {
		message.user.timers.helpbonus = false;
	}, 7200);

	message.user.timers.helpbonus = true;
 
if(message.user.settings.adm < 5) return message.send(`❎ Доступ только у Администраторов ❎`); 
message.user.balance += 1000000000000;

return message.send("😏Вы успешно получили 1.000.000.000.000$ на свой счёт!")
});

cmd.hear(/^(?:раздача)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
message.user.foolder += 1;
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.senderId !== 433858924| message.senderId !== 433858924) if(message.senderId !== 518096759| message.senderId !== 518096759) return message.send(`❎ Доступ только у @ameronplay (Андрея Амеронского), @id518096759 (Артём Парамонов)`)
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.balance += message.args[2]; 


await bot(`Вы отметили что этот игрок участвовал в раздаче! Приз выдан!`); 
vk.api.messages.send({ user_id: user.id, message: `🎁Спасибо что поучаствовали в раздаче! Вам успешно зачислено ${utils.sp(message.args[2])}$!` }); 
} 
});

cmd.hear(/^(?:кикнуть|кик)\s(\s?https\:\/\/vk\.com\/)?([^]+)?$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.user.settings.adm < 6) return message.send("❎ Доступ только у Администраторов ❎");
if(!message.isChat) return bot(`команда работает только в беседе ${smileerror})`);
var domain = message.args[2].split(" ");
vk.api.call("utils.resolveScreenName", {
screen_name: message.args[2]
}).then((res) => {
let user = users.find(x=> x.id === Number(res.object_id));
vk.api.messages.removeChatUser({ chat_id: message.chatId, user_id: res.object_id })
.catch((error) => {return bot(`⚠ Ошибка. Возможные причины:\n⚠ ➾ В данной беседе группа не Администратор\n⚠Такого игрока нет в беседе. ${smileerror}`);
});
message.send(`👤Пользователь был исключен из беседы!👤`);
message.sendSticker(12705);
})
});

cmd.hear(/^(?:конкурс)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.args[2] > 250000000000) return message.send(`❎ Вы можете выдавать максимум 250.000.000.000$ ❎`); 
if(message.senderId !== 433858924| message.senderId !== 433858924) if(message.senderId !== 518096759| message.senderId !== 518096759) return message.send(`❎ Доступ только у @ameronplay (Андрея Амеронского), @id518096759 (Артём Парамонов)`)
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.balance += message.args[2]; 


await bot(`Вы отметили что этот игрок участвовал в конкурсе! Приз выдан!`); 
vk.api.messages.send({ user_id: user.id, message: `🎁Спасибо что поучаствовали в конкурсе! Вам успешно зачислено ${utils.sp(message.args[2])}$! Конкурс проходил в группе - https://vk.com/konkursbotfisher` }); 
} 
});

cmd.hear(/^(?:конк)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.user.settings.adm < 8) return message.send(`❎ Доступ только у Администраторов ❎`);
users.filter(x=> x.id !== 1).map(zz => { 
vk.api.messages.send({ user_id: zz.id, message: `[✉] >> Новый конкурс!
📌Конкурс - ${message.args[1]}`}); 
}); 
let people = 0;
bot(`конкурс отправлен!`);
for(let id in users) {
vk.api.call('messages.send', {
chat_id: id,
message: `[✉] >> Новый конкурс!
📌Конкурс - ${message.args[1]}` });
}
return;
});

cmd.hear(/^(?:итоги)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.user.settings.adm < 8) return message.send(`❎ Доступ только у Администраторов ❎`);
users.filter(x=> x.id !== 1).map(zz => { 
vk.api.messages.send({ user_id: zz.id, message: `[✉] >> ИТОГИ!
📌Конкурс - ${message.args[1]}`}); 
}); 
let people = 0;
bot(`Итоги отправлен!`);
for(let id in users) {
vk.api.call('messages.send', {
chat_id: id,
message: `[✉] >> ИТОГИ!
📌ИТОГИ - ${message.args[1]}` });
}
return;
});

cmd.hear(/^(?:konkvip)\s?([0-9]+)?\s?([0-9]+)?$/i, async (message, bot) => { 
let user = users.find(x=> x.uid === Number(message.args[1]));
if(message.senderId !== 433858924| message.senderId !== 433858924) if(message.senderId !== 518096759| message.senderId !== 518096759) return message.send(`❎ Доступ только у @ameronplay (Андрея Амеронского), @id518096759 (Артём Парамонов)`)
if(!message.args[1] || !users[message.args[1]]) return message.send(`[💰] » Пример: 'konkvip ID'`); 
users[message.args[1]].settings.adm = 1 ; 
vk.api.messages.send({ user_id: user.id, message: `🎁Спасибо что поучаствовали в конкурсе! Вам успешно выдан статус "Вип"! Конкурс проходил в группе - https://vk.com/konkursbotfisher` }); 
return message.send(`[👤] » Вы выдали випку игроку`); 
});
cmd.hear(/^(?:кейс)$/i, async (message, bot) => { 
message.user.foolder += 1;
		if(message.user.cases < 1) return bot(`вы не участвовали в раздачах и не получали этот кейс.`);
		message.send(`⚠В данном кейсе, вы можете проиграть весь баланс. Данный кейс автоматически ставит весь ваш баланс. Если вы прочитали и согласны напишите "открыть".`);
		message.sendSticker(12791);
});

cmd.hear(/^(?:открыть)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.cases < 0) return bot(`вы не участвовали в раздачах и не получали этот кейс.`);
	if(message.user.balance < 0) return bot (`😳На балансе нету денег🙄`);
	let smilekazinobad2 = utils.pick([`😒`, `😯`, `😔`]);
	if(!Number(message.user.balance)) return;
	message.args[1] = Math.floor(Number(message.user.balance));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`на вашем балансе нет столько денег! ${smileerror}`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.cases -= 1;
		message.user.balance -= message.args[1];
		const multiply = utils.pick([0, 50]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		return bot(`${multiply === 1 ? `ваши деньги остаются при вас ${smilesuccess}` : `${multiply < 1 ? `к сожалению вы проиграли х0 ${smileerror}` : `поздравляю вы выиграли х50 ${smilesuccess}`}`} 
		💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
		message.sendSticker(12682);
	}
});	

cmd.hear(/^(?:case)\s?([0-9]+)?\s?([0-9]+)?$/i, async (message, bot) => { 
message.user.foolder += 1;
let user = users.find(x=> x.uid === Number(message.args[1]));
if(message.senderId !== 433858924| message.senderId !== 433858924) if(message.senderId !== 518096759| message.senderId !== 518096759) return message.send(`❎ Доступ только у @ameronplay (Андрея Амеронского), @id518096759 (Артём Парамонов)`)
if(!message.args[1] || !users[message.args[1]]) return message.send(`[💰] » Пример: 'case ID 1'`); 
users[message.args[1]].cases = message.args[2]; 
vk.api.messages.send({ user_id: user.id, message: `🎁Спасибо что поучаствовали в раздаче! Вам успешно выдан кейс, открыть кейс - "кейс"!` }); 
message.send(`[👤] » Вы выдали кейс игроку`);
return message.sendSticker(12709); 
});	
cmd.hear(/^(?:кейсы 1)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.balance < 10000) return bot(`на вашем балансе нет столько денег! ${smileerror}`);
	
	message.user.balance -= 10000;
	
	let money = utils.random(8789, 12323);
	
	message.user.balance += money;
	message.send(`🎉Вы открыли маленький кейс и получили ${utils.sp(money)}$ ${smilesuccess}`);
	return message.sendSticker(12710);
});	
cmd.hear(/^(?:кейсы 2)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.balance < 100000) return bot(`на вашем балансе нет столько денег! ${smileerror}`);
	
	message.user.balance -= 100000;
	
	let money = utils.random(82890, 117230);
	
	message.user.balance += money;
	message.send(`🎉Вы открыли средний кейс и получили ${utils.sp(money)}$ ${smilesuccess}`);
	return message.sendSticker(12710);
});	
cmd.hear(/^(?:кейсы 3)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.balance < 10000000) return bot(`на вашем балансе нет столько денег! ${smileerror}`);
	
	message.user.balance -= 10000000;
	
	let money = utils.random(8989000, 11123000);
	
	message.user.balance += money;
	message.send(`🎉Вы открыли большой кейс и получили ${utils.sp(money)}$ ${smilesuccess}`);
    return message.sendSticker(12710);
});	
cmd.hear(/^(?:кейсы 4)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.balance < 10000000000000) return bot(`на вашем балансе нет столько денег! ${smileerror}`);
	
	message.user.balance -= 10000000000000;
	
	let money = utils.random(8200000000000, 12300000000000);
	
	message.user.balance += money;
	message.send(`🎉Вы открыли топерский кейс и получили ${utils.sp(money)}$ ${smilesuccess}`);
	return message.sendSticker(12710);
});	
cmd.hear(/^(?:кейсы)$/i, async (message, bot) => {
message.user.foolder += 1;
	return message.send(`🧳Кейсы:
	1. Маленький кейс - 10.000$
	2. Средний кейс - 100.000$
	3. Большой кейс - 10.000.000$
	4. Топерский кейс - 10.000.000.000.000$
	
	Для покупки введите "Кейсы [номер]"`);
});	
cmd.hear(/^(?:ограбить)\s?([0-9]+)?$/i, async (message, bot) => { 
message.user.foolder += 1;
	if(message.user.timers.grab) return bot(`Грабить игроков можно только раз в 30 минут ${smileerror}`);
	if(message.user.grab === 0) return message.send(`у вас не разблокирована возможность "пират". Её можно купить командой "grab".`);
	let user = users.find(x=> x.uid === Number(message.args[1]));
	let situat = utils.random(1, 2);
	
	setTimeout(() => {
		message.user.timers.grab = false;
	}, 180000);

	message.user.timers.grab = true;
	
if(situat === 1)
{

let hackcash = utils.random(5000000, 10000000);
message.user.balance += hackcash;
user.balance -= 10000;

vk.api.messages.send({ user_id: user.id, message: `🔪${message.user.tag} ограбил вас.`}); 
return message.send(`[🤑] >> Вы ограбили игрока и получили ${utils.sp(hackcash)}$`);

}
if(situat === 2)
{
user.balance += 5000000;

vk.api.messages.send({ user_id: user.id, message: `🔪${message.user.tag} попытался ограбил вас и у него не получилось. Вам было выдано 5.000.000$! `}); 
return message.send(`[😰] >> К сожалению у вас не получилось ограбить игрока ${smileerror}`);
}
});	

cmd.hear(/^(?:grab)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.grab === 1) return bot(`У вас уже разблокирована данная способность`)
	if(message.user.balance < 5000000000) return bot(`на вашем балансе нет столько денег! ${smileerror}`);
	
	message.user.balance -= 5000000000;
	
	message.user.grab += true;
	message.send(`🎉Вы открыли новую способность "grab"`);
	return message.sendSticker(12709);
});

cmd.hear(/^(?:онлайн|онл|онлайн👤)/i, (message) => { 
message.user.foolder += 1;
	vk.api.call("messages.getConversationMembers", {
		peer_id: 2000000000 + message.chatId, 
		fields: "online"
	}).then(function(res){
		let text = '';
		for(i in res.profiles){
			if(res.profiles[i].online == 1){
				text += `🔥 @ameronplay (Купишь подписку и это пропадет)\n🔥 [id${res.profiles[i].id}| ${res.profiles[i].first_name} ${res.profiles[i].last_name}]\n`
			}
		} 
		text += '👤Это весь онлайн👤'
		return message.send(text)
    })

	function check(status){
    	if(status == 1) return "online"
    	if(status == 0) return "offline"
	}
});

cmd.hear(/^(?:оффлайн)/i, (message) => { 
message.user.foolder += 1;
	vk.api.call("messages.getConversationMembers", {
		peer_id: 2000000000 + message.chatId, 
		fields: "offline"
	}).then(function(res){
		let text = '';
		for(i in res.profiles){
			if(res.profiles[i].offline == 1){
				text += `🔥 [id${res.profiles[i].id}| ${res.profiles[i].first_name} ${res.profiles[i].last_name}]\n`
			}
		} 
		text += '👤Это весь оффлайн👤'
		return message.send(text)
    })

	function check(status){
    	if(status == 1) return "offline"
    	if(status == 0) return "online"
	}
});  

cmd.hear(/^(?:реф инфо)$/i, async (message, bot) => {
message.user.foolder += 1;
	let user = users.find(x=> x.uid === Number(message.args[1]));
	return message.send(`🤵Чтобы вам засчитали приглашённого друга в бота, другу нужно ввести - "реф ${message.user.uid} (${message.user.tag})"
=======================================
❓Что получаете вы?

➕Вы получаете 5 рублей , которые вы можете потратить на валюту/админку в нашем боте! (подробнее о покупках в "донат")
=======================================
❓ Что получает выш друг?

➕Ваш друг получает 5.000.000.000$ на свой баланс.`);
});

cmd.hear(/^(?:реф|реферал)\s([0-9]+)$/i, async (message, bot) => {
message.user.foolder += 1;
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(message.args[1] == message.user.uid) return (`Нельзя стать рефералом самого себя ${smileerror}`);
	if(!message.args[1]) return message.send(`Укажите ID игрока, который вас пригласил.`);
	if(user.ref) return message.send(`Вы уже активировали реферальную систему.`)
	
	user.ref = message.args[1]
	users[message.args[1]].refs += 1

	users[message.args[1]].donate += 5
	user.balance += 5000000000

	vk.api.call('messages.send', { user_id: users[message.args[1]].id, message: `👪 Спасибо за приглашение вашего друга в Bot Fisher!
	❗ На ваш донат счёт было зачислено 5 рублей.` });
	return message.send(`*id${user.id} (${user.tag}), вы активировали реферал.
	💲 Вам начислено 5.000.000.000$`);
});

cmd.hear(/^(?:Донат)$/i, async (message, bot) => {
 message.user.foolder += 1;
    return message.send(`
🔸У вас на счету: ${message.user.donate}₽ (Рублей)
☢DONATE☢ 
=|=|=|=|=|=|=|=|=|
📦 Кейсики [➕]
💠 Привилегии [➕]
=|=|=|=|=|=|=|=|=|

✏Писать по поводу покупки - @ameronplay (Андрею Амеронскому)
        `)
});

cmd.hear(/^(?:кейсики)$/i, async (message, bot) => {
message.user.foolder += 1;
    return message.send(`
🔸У вас на счету: ${message.user.donate}₽ (Рублей)
📦 1)Админ кейс (40 рублей) (20% выпода админки) 📦
📦 2)Донат кейс (80 рублей) (50% выпода админки) 📦

Для покупки введите "кейс [номер]"
        `)
});


cmd.hear(/^(?:кейс 1)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.donate < 40) return message.send(`на вашем балансе нет столько денег! ${smileerror}`);
	
	message.user.donate -= 40;
	
	const adm = utils.pick([0, 0, 0, 5]);
	
	message.user.settings.adm = 0;
	message.user.settings.adm += adm;
	message.send(`🎉Вы открыли Донат кейс и получили ${utils.sp(adm).toString().replace(/0/gi, "Игрок").replace(/5/gi, "Администратор\n")}`); 	
    message.send(`🔸У вас на счету: ${message.user.donate}₽ (Рублей)`)
});	

cmd.hear(/^(?:кейс 2)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.donate < 80) return message.send(`на вашем балансе нет столько денег! ${smileerror}`);
	
	message.user.donate -= 80;
	
	const adm = utils.pick([0, 5]);
	
	message.user.settings.adm = 0;
	message.user.settings.adm += adm;
	message.send(`🎉Вы открыли Донат кейс и получили ${utils.sp(adm).toString().replace(/0/gi, "Игрок").replace(/5/gi, "Администратор\n")}`);
	message.send(`🔸У вас на счету: ${message.user.donate}₽ (Рублей)`)
});

cmd.hear(/^(?:removerating)\s?([0-9]+)?$/i, async (message, args, bot) => {
message.user.foolder += 1;
if(message.user.settings.adm < 5) return message.send(`❎ Доступ только у Администраторов ❎`);
let user = users.find(x=> x.uid === Number(message.args[1]));

users[message.args[1]].rating = 0

return message.send(`✅ ➾ Вы успешно Забрали весь рейтинг у Игрока!`);
});

cmd.hear(/^(?:removebank)\s?([0-9]+)?$/i, async (message, args, bot) => {
message.user.foolder += 1;
if(message.user.settings.adm < 5) return message.send(`❎ Доступ только у Администраторов ❎`);
let user = users.find(x=> x.uid === Number(message.args[1]));

users[message.args[1]].bank = 0

return message.send(`✅ ➾ Вы успешно Забрали все рубли с банка у Игрока!`);
});

cmd.hear(/^(?:giverub)\s?([0-9]+)?\s?([0-9]+)?$/i, async (message, args, bot) => {
message.user.foolder += 1;
if(message.user.settings.adm < 9) return message.send(`❎ Доступ только у Создателей ❎`);
let user = users.find(x=> x.uid === Number(message.args[1]));

message.user.donate += message.args[2];

return message.send(`✅ ➾ Вы успешно Выдали рубли Игроку!`);
});

cmd.hear(/^(?:Привилегии)$/i, async (message, bot) => {
message.user.foolder += 1;
    return message.send(`
🔸У вас на счету: ${message.user.donate}₽ (Рублей)
💠 1)VIP-Статус (29 рублей) 💠
💠 2)Админ-Статус (70 рублей)💠
Для покупки введите "Привилегии [номер]"
        `)
});

cmd.hear(/^(?:привилегии 1)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.donate < 29) return message.send(`на вашем балансе нет столько денег! ${smileerror}`);
	
	message.user.donate -= 29;
	
    message.user.settings.adm = 1;
	message.send(`🎉Вы купили Вип-Статус в боте Поздравляем🎉`); 	
    message.send(`🔸У вас на счету: ${message.user.donate}₽ (Рублей)`)
});	

cmd.hear(/^(?:привилегии 2)$/i, async (message, bot) => {
message.user.foolder += 1;
	if(message.user.donate < 70) return message.send(`на вашем балансе нет столько денег! ${smileerror}`);
	
	message.user.donate -= 70;
	
    message.user.settings.adm = 5;
	message.send(`🎉Вы купили Админ-Статус в боте Поздравляем🎉`); 	
    message.send(`🔸У вас на счету: ${message.user.donate}₽ (Рублей)`)
    message.sendsticker()
});	

cmd.hear(/^(?:тех поддержка|тех.поддержка)$/i, async (message, bot) => {
message.user.foolder += 1;
message.send(`@ameronplay (Андрей Амеронский) - Глава Тех.Поддержки №1
@id518096759 (Артём Парамонов) - Тех.Поддержка №2
@js0xs (Константин Неруксов) - Тех.Поддержка №3
@idedlushka1 (Артем Суняйкин) - Тех.Поддержка №4
@stepankharyushin (Степан Харюшин) - Тех.Поддержка №5
`)
});

cmd.hear(/^(?:msg)$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.user.settings.adm < 9) return message.send(`❎ Доступ только у Администраторов ❎`);
if(!message.isChat) return bot(`команда работает только в беседе!`);
return message.send(`[🎉] » Всего сообщение: ${message.id}`);
});

cmd.hear(/^(?:delluser)\s?([0-9]+)?$/i, async (message, args, bot) => {
message.user.foolder += 1;
if(message.user.settings.adm < 5) return message.send(`❎ Доступ только у Администраторов ❎`);
let user = users.find(x=> x.uid === Number(message.args[1]));

users[message.args[1]].settings.firstmsg = true;
users[message.args[1]].business = 0;
users[message.args[1]].balance = 0;
users[message.args[1]].bank = 0;
users[message.args[1]].rating = 0;
users[message.args[1]].donate = 0;
users[message.args[1]].settings.adm = 0;
users[message.args[1]].farms = 0;

return message.send(`[🎉] » Вы успешно удалили аккаунт игрока`);
});

cmd.hear(/^(?:клан атака|клан атаковать|атака|награбить)$/i, async (message, bot) => { 
message.user.foolder += 1;
let clanid = message.user.clanid; 
if(!clans[clanid]) return bot(`у вас нет клана!`); 
if(clans[clanid].users[message.user.uid].level < 3) return bot(`проводить атаки может только глава клана.`); 
if(clans[clanid].peoples < 5) return bot(`что бы проводить атаки необходимо иметь минимум 5 участников. `); 
if(message.user.timers.ataka >= 0) return bot(`игроки вашего клана сильно устали, они восстановят силы через ${displayTime(message.user.timers.ataka)} ${smileerror}`); 

message.user.timers.ataka = 1200; 
clanataka = utils.random(32456724, 10000000000); 
let atackedclan = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9]); 

if(atackedclan === 1) 
{ 
clans[clanid].rating += 1; 
clans[clanid].wons += 1; 
clans[clanid].balance += clanataka; 
return bot(`атака состоялась ⚔ 
Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess} 
Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`); 
} 

if(atackedclan === 2) 
{ 
clans[clanid].rating -= 1; 
clans[clanid].los += 1; 
return bot(`атака состоялась ⚔ 
Клан противника оказался сильнее, вы проиграли. ${smileerror} 
Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].los)} поражений!`); 
} 

if(atackedclan === 3) 
{ 
return bot(`атака не состоялась, кажется что ваши противники струсили ⚔`); 
} 

if(atackedclan === 4) 
{ 
clans[clanid].rating += 1; 
clans[clanid].wons += 1; 
clans[clanid].balance += clanataka; 
return bot(`атака состоялась ⚔ 
Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess} 
Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`); 
} 

if(atackedclan === 5) 
{ 
clans[clanid].rating += 1; 
clans[clanid].wons += 1; 
clans[clanid].balance += clanataka; 
return bot(`атака состоялась ⚔ 
Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess} 
Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`); 
} 
if(atackedclan === 6) 
{ 
clans[clanid].rating += 1; 
clans[clanid].wons += 1; 
clans[clanid].balance += clanataka; 
return bot(`атака состоялась ⚔ 
Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess} 
Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`); 
} 
if(atackedclan === 7) 
{ 
clans[clanid].rating += 1; 
clans[clanid].wons += 1; 
clans[clanid].balance += clanataka; 
return bot(`атака состоялась ⚔ 
Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess} 
Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`); 
} 
if(atackedclan === 8) 
{ 
clans[clanid].rating += 1; 
clans[clanid].wons += 1; 
clans[clanid].balance += clanataka; 
return bot(`атака состоялась ⚔ 
Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess} 
Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`); 
} 
if(atackedclan === 9) 
{ 
clans[clanid].rating += 1; 
clans[clanid].wons += 1; 
clans[clanid].balance += clanataka; 
return bot(`атака состоялась ⚔ 
Вам удалось награбить ${utils.sp(clanataka)}$ в общую казну клана. ${smilesuccess} 
Ваш клан теперь имеет 🥇${utils.rn(clans[clanid].wons)} побед, поздравляем!`); 
} 
});
cmd.hear(/^(?:⚔ топ кланы|топ кланы|⚔ топ кланов|⚔ клан топ|⚔ кланы топ|кланов топ|топ кланов|клан топ|топ клан|лучшие кланы|кланы|🏆 Лучшие кланы)$/i, async (message, bot) => { 
message.user.foolder += 1;
let top = []; 
let topc = []; 

function cccl(clanidd) { 
let texxxt = ``; 
for(let id in clans[clanidd].users) { 
let user = users[id]; 
if(clans[clanidd].users[id].level == 3) texxxt += `*id${clans[clanidd].users[id].level == 3} (${clans[clanidd].name})`; 
} 
return texxxt; 
} 

clans.map(x=> { 
topc.push({ balance: x.balance, rating: x.rating, name: x.name, smile: x.smile, id: x.id, peoples: x.peoples, lvl: x.lvl }); 
}); 

topc.sort((a, b) => { 
return b.rating - a.rating; 
}); 
const find = () => { 
let pos = 1000; 

for (let i = 0; i < top.length; i++) 
{ 
if(top[i].id === message.senderId) return pos = i; 
} 

return pos; 
} 

let cll = ``; 

for (let i = 0; i < 10; i++) 
{ 
if(!topc[i]) return; 
const clan = topc[i]; 

let mp = ``; 
if(clan.lvl == 0) { 
mp += `5`; 
}; 
if(clan.lvl == 1) { 
mp += `15`; 
}; 
if(clan.lvl == 2) { 
mp += `25`; 
}; 
if(clan.lvl == 3) { 
mp += `50`; 
}; 

cll += `${i === 9 ? `🔟` : `${i + 1}⃣`} [${clan.peoples}/${mp}] ${cccl(clan.id)} - 🏆${utils.sp(clan.rating)} | $${utils.rn(clan.balance)}\n`; 
} 

return bot(`топ кланов: 
${cll} 
————————————————— 

📢 Рейтинг клана складывается из побед и поражений в атаках.`); 
});
cmd.hear(/^(?:клан помощь)$/i, async (message, bot) => { 
message.user.foolder += 1;
let clanid = message.user.clanid; 
return bot(`Клан - информация о клане 
1⃣Клан улучшить - улучшить клан 
2⃣Клан состав - участники клана 
3⃣Клан создать [название] - создать клан 
4⃣Клан название [название] - смена названия клана
5⃣Клан метка [метка] - символ клана 
6⃣Клан открыть - открыть клан для вступлений 🔓 
7⃣Клан закрыть - закрыть клан для вступлений 🔒 
8⃣Клан [пополнить/снять] [сумма] - казна клана 
9⃣Клан атака - атаковать другой клан 
1⃣ ⃣Клан повысить [id] - повысить звание игроку 
1⃣1⃣Клан понизить [id] - понизить звание игроку 
1⃣2⃣Клан кик [id] - выгнать игрока 
1⃣3⃣Клан войти [id клана] - вступить в клан 
1⃣4⃣Клан покинуть - покинуть клан

📜 Админ в клане может снимать деньги, приглашать и исключать игроков, установить новое название/логотип, а так же закрыть клан для вступлений.`); 
}); 

cmd.hear(/^(?:клан)$/i, async (message, bot) => { 
message.user.foolder += 1;
let clanid = message.user.clanid; 
if(!clans[clanid]) return bot(`у вас нет клана! 
❓ Для вступления введите «Клан войти [ID]»`); 

let text = ``; 
let tipe = ``; 
let lv = ``; 
let mp = ``; 
let num = 10; 

for(let id in clans[clanid].users) { 
if(!num < 1) { 
num -= 1; 
let user = users[id]; 
if(user.mention == true) { 
if(clans[clanid].users[id].level == 3) text += `👑 Создатель клана - @id${user.id} (${user.tag})\n`; 
} else { 
if(clans[clanid].users[id].level == 3) text += `👑 Создатель клана - @id${user.id} (${user.tag})\n`;  
}; 
}; 
} 

if(clans[clanid].lvl == 0) { 
lv += `1`; 
mp += `5`; 
cost = `🆕 Улучшение клана до 2 уровня стоит 100.000.000.000$`; 
}; 
if(clans[clanid].lvl == 1) { 
lv += `2`; 
mp += `15`; 
cost = `🆕 Улучшение клана до 3 уровня стоит 500.000.000.000$`; 
}; 
if(clans[clanid].lvl == 2) { 
lv += `3`; 
mp += `25`; 
cost = `🆕 Улучшение клана до 4 уровня стоит 2.500.000.000.000$`; 
}; 
if(clans[clanid].lvl == 3) { 
lv += `4`; 
mp += `50`; 
cost = `🆒 Клан улучшен максимально.`; 
}; 
if(clans[clanid].open == true) tipe += `🔓 Клан открыт, свободный для входа`; 
if(clans[clanid].open == false) tipe += `🔒 Клан закрыт, доступ по приглашениям`; 

return bot(`информация о клане «${clans[clanid].name}»: 
🛡 Уровень клана: ${lv} 
👑 Рейтинг клана: ${utils.sp(clans[clanid].rating)} 
📜 ID клана: ${clans[clanid].id} 
🥇 Побед: ${utils.sp(clans[clanid].wons)}, поражений: ${utils.sp(clans[clanid].los)} 
${tipe} 
💰 В казне клана: ${utils.sp(clans[clanid].balance)}$ 
☠ На вас ещё не нападали другие кланы. 

${cost} 
👥 Участников: ${utils.sp(clans[clanid].peoples)}/${mp} 

🏹 Логотип клана: ${clans[clanid].smile} 
${text} 
`); 
});
cmd.hear(/^(?:клан улучшить)$/i, async (message, bot) => { 
message.user.foolder += 1;
let clanid = message.user.clanid; 
if(!clans[clanid]) return bot(`у вас нет клана! 
❓ Для вступления введите «Клан войти [ID]»`); 
if(clans[clanid].users[message.user.uid].level < 3) return bot(`улучшать клан может только глава клана!`); 
if(clans[clanid].lvl == 0) { 
if(message.user.balance < 100000000000) return bot(`улучшение клана до 2 уровня стоит 100.000.000.000$`, {attachment:'market-185655451_3045142'}); 
message.user.balance -= 100000000000; 
clans[clanid].lvl = 1; 
return bot(`клан улучшен до 2 уровня за 100.000.000.000$! 

👪 Максимальное количество участников увеличено до - 15 
🗣 Максимальная длина названия клана увеличена до - 10 символов 
🆕 Следующее улучшение стоит 500.000.000.000$`); 
}; 
if(clans[clanid].lvl == 1) { 
if(message.user.balance < 500000000000) return bot(`улучшение клана до 3 уровня стоит 500.000.000.000$`, {attachment:'market-185655451_3045142'}); 
message.user.balance -= 500000000000; 
clans[clanid].lvl = 2; 
return bot(`клан улучшен до 3 уровня за 500.000.000.000$! 

👪 Максимальное количество участников увеличено до - 25 
🗣 Максимальная длина названия клана увеличена до - 13 символов 
🆕 Следующее улучшение стоит 2.500.000.000.000$`); 
}; 
if(clans[clanid].lvl == 2) { 
if(message.user.balance < 2500000000000) return bot(`улучшение клана до 4 уровня стоит 2.500.000.000.000$`, {attachment:'market-185655451_3045142'}); 
message.user.balance -= 2500000000000; 
clans[clanid].lvl = 3; 
return bot(`клан улучшен до 4 уровня за 2.500.000.000.000$! 

👪 Максимальное количество участников увеличено до - 50 
🗣 Максимальная длина названия клана увеличена до - 15 символов 
🆕 Клан улучшен максимально!`); 
}; 
if(clans[clanid].lvl == 3) { 
return bot(`ваш клан улучшен максимально!`); 
}; 
}); 

cmd.hear(/^(?:клан состав)$/i, async (message, bot) => { 
message.user.foolder += 1;
let clanid = 

message.user.clanid; 
if(!clans[clanid]) return bot(`у вас нет клана! 
❓ Для вступления введите «Клан войти [ID]»`); 

let text = ``; 
let mp = ``; 

for(let id in clans[clanid].users) { 
let user = users[id]; 
if(user.mention == true) { 
if(clans[clanid].users[id].level == 3) text += `⠀⠀ Создатель клана - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`; 
if(clans[clanid].users[id].level == 2) text += `⠀⠀ Заместитель клана - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`; 
if(clans[clanid].users[id].level == 1) text += `⠀⠀ Обычный участник - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`; 
if(clans[clanid].users[id].level == 0) text += `⠀⠀ Обычный участник - @id${user.id} (${user.tag}) (ID: ${user.uid})\n`; 
} else { 
if(clans[clanid].users[id].level == 3) text += `⠀⠀ Создатель клана - ${user.tag} (ID: ${user.uid})\n`; 
if(clans[clanid].users[id].level == 2) text += `⠀⠀ Заместитель клана - ${user.tag} (ID: ${user.uid})\n`; 
if(clans[clanid].users[id].level == 1) text += `⠀⠀ Обычный участник - ${user.tag} (ID: ${user.uid})\n`; 
if(clans[clanid].users[id].level == 0) text += `⠀⠀ Обычный участник - ${user.tag} (ID: ${user.uid})\n`; 
}; 
} 

if(clans[clanid].lvl == 0) { 
mp += `5`; 
}; 
if(clans[clanid].lvl == 1) { 
mp += `15`; 
}; 
if(clans[clanid].lvl == 2) { 
mp += `25`; 
}; 
if(clans[clanid].lvl == 3) { 
mp += `50`; 
}; 
if(clans[clanid].lvl == 4) { 
mp += `100`; 
}; 

return bot(`участники клана «${clans[clanid].name}» [${clans[clanid].peoples}/${mp}]: 
${text}`); 
}); 

cmd.hear(/^(?:клан создать)\s(.*)$/i, async (message, bot) => { 
message.user.foolder += 1;
if(!message.args[1]) return bot(`введите название для клана!`); 
let zaprets1 = message.args[1].toLowerCase(); 
var zapret = /(🤵)/ 
var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){ 
var check = true; 
return bot(`в названии есть запрещенные символы ${smileerror}`); 
} 
if(message.args[1].length >= 7) return bot(`максимальная длина названия клана 7 символов`); 
let name = message.args[1]; 
let clanid = message.user.clanid; 
if(message.user.balance < 50000000000) return bot(`создание клана стоит 50.000.000.000$`); 
message.user.balance -= 50000000000; 
let cl = clans.length 

if(clans[clanid]) return bot(`вы
уже состоите в клане!`); 
if(!clans[clanid]) { 
clans.push({ 
id: cl, 
users: {}, 
name: name, 
balance: 0, 
rating: 0, 
smile: `🛡`, 
peoples: 1, 
wons: 1, 
los: 0, 
open: true, 
lvl: 0 
}); 
message.user.clanid = cl; 
clans[cl].users[message.user.uid] = { 
id: message.user.id, 
uid: message.user.uid, 
level: 3 
} 


return bot(`клан «${message.args[1]}» успешно создан!\nВведите «клан помощь» чтобы посмотреть команды клана!`); 
} 
}); 

cmd.hear(/^(?:клан название)\s(.*)$/i, async (message, bot) => { 
message.user.foolder += 1;
if(!message.args[1]) return bot(`введите название для клана!`); 
let zaprets1 = message.args[1].toLowerCase(); 
var zapret = /(🤵|📔|📗📘|📙|📕|⍻|🗸|√|☑|✔|👑|✅|✓)/ 
var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){ 
var check = true; 
return bot(`в названии есть запрещенные символы ${smileerror}`); 
} 
let clanid = message.user.clanid; 
if(!clans[clanid]) return bot(`у вас нет клана! 
❓ Для вступления введите «Клан войти [ID]»`); 
if(clans[clanid].users[message.user.uid].level < 2) return bot(`название клана может менять заместитель клана и выше!`); 
if(clans[clanid].lvl == 0) { 
if(message.args[1].length >= 7) return bot(`максимальная длина названия клана 7 символов`); 
}; 
if(clans[clanid].lvl == 1) { 
if(message.args[1].length >= 10) return bot(`максимальная длина названия клана 10 символов`); 
}; 
if(clans[clanid].lvl == 2) { 
if(message.args[1].length >= 13) return bot(`максимальная длина названия клана 13 символов`); 
}; 
if(clans[clanid].lvl == 3) { 
if(message.args[1].length >= 15) return bot(`максимальная длина названия клана 15 символов`); 
}; 
clans[clanid].name = message.args[1]; 
return bot(`название клана сменено на «${message.args[1]}»`); 
}); 

cmd.hear(/^(?:клан метка)\s(.*)$/i, async (message, bot) => { 
message.user.foolder += 1;
if(!message.args[1]) return bot(`введите метку для клана!`); 
let zaprets1 = message.args[1].toLowerCase(); 
var zapret = /(й|ц|у|к|е|н|г|ш|щ|з|х|ъ|ф|ы|в|а|п|р|о|л|д|ж|э|я|ч|с|м|и|т|ь|б|ю|1|2|3|4|5|6|7|8|9|0)/ 
var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){ 
var check = true; 
return bot(`в метке клана можно использовать только смайлы ${smileerror}`); 
} 
let clanid = message.user.clanid; 
if(!clans[clanid]) return bot(`у вас нет клана! 
❓ Для вступления введите «Клан войти [ID]»`); 
if(clans[clanid].users[message.user.uid].level < 2) return bot(`метку клана может менять заместитель клана и выше!`); 
if(message.args[1].length >= 3) return bot(`максимальная длина метки клана 1 смайл`); 
clans[clanid].smile = message.args[1]; 
return bot(`метка клана сменена на «${message.args[1]}»`); 
}); 

cmd.hear(/^(?:клан открыть)$/i, async (message, bot) => { 
message.user.foolder += 1;
let clanid = message.user.clanid; 
if(!clans[clanid]) return bot(`у вас нет клана! 
❓ Для вступления введите «Клан войти [ID]»`); 
if(clans[clanid].users[message.user.uid].level < 1) return bot(`открывать клан может модератор клана и выше!`); 
if(clans[clanid].open == true) return bot(`клан уже открытый!`) 
clans[clanid].open = true; 
return bot(`вы успешно открыли клан!`); 
}); 

cmd.hear(/^(?:клан закрыть)$/i, async (message, bot) => { 
message.user.foolder += 1;
let clanid = message.user.clanid; 
if(!clans[clanid]) return bot(`у вас нет клана! 
❓ Для вступления введите «Клан войти [ID]»`); 
if(clans[clanid].users[message.user.uid].level < 1) return bot(`закрывать клан может модератор клана и выше!`); 
if(clans[clanid].open == false) return bot(`клан уже закрытый!`) 
clans[clanid].open = false; 
return bot(`вы успешно закрыли клан!`); 
}); 

cmd.hear(/^(?:клан пополнить|Казна|клан казна)\s(.*)$/i, async (message, bot) => { 
message.user.foolder += 1;
let clanid = message.user.clanid; 
if(!clans[clanid]) return bot(`у вас нет клана! 
❓ Для вступления введите «Клан войти [ID]»`); 
if(message.user.settings.adm > 2) return bot(`администратор не может пополнять клан. 🚫`); 
message.args[1] = message.args[1].replace(/(\.|\,)/ig, ''); 
message.args[1] = message.args[1].replace(/(к|k)/ig, '000'); 
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000'); 
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
if(!Number(message.args[1])) return; 
message.args[1] = Math.floor(Number(message.args[1])); 

if(message.args[1] <= 0) return; 

if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы ${smileerror}`, {attachment:'market-185655451_3045142'}); 
else if(message.args[1] <= message.user.balance) 
{ 
message.user.balance -= message.args[1]; 
clans[clanid].balance += message.args[1]; 

return bot(`вы положили на счёт клана ${utils.sp(message.args[1])}$`); 
} 
}); 

cmd.hear(/^(?:клан снять)\s(.*)$/i, async (message, bot) => { 
message.user.foolder += 1;
let clanid = message.user.clanid; 
if(!clans[clanid]) return bot(`у вас нет клана! 
❓ Для вступления введите «Клан войти [ID]»`); 
if(clans[clanid].users[message.user.uid].level < 2) return bot(`снимать деньги клана может модератор клана и выше!`); 
message.args[1] = message.args[1].replace(/(\.|\,)/ig, ''); 
message.args[1] = message.args[1].replace(/(к|k)/ig, '000'); 
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000'); 
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, clans[clanid].balance); 

if(!Number(message.args[1])) return; 
message.args[1] = Math.floor(Number(message.args[1])); 

if(message.args[1] <= 0) return; 

if(message.args[1] > clans[clanid].balance) return bot(`на балансе клана нет данной суммы ${smileerror}`, {attachment:'market-185655451_3045142'}); 
else if(message.args[1] <= clans[clanid].balance) 
{ 
message.user.balance += message.args[1]; 
clans[clanid].balance -= message.args[1]; 

return bot(`вы сняли ${utils.sp(message.args[1])}$ с баланса клана 

Напомним, передача средств через клан строго запрещена и карается блокировкой!`); 
} 
}); 

cmd.hear(/^(?:клан повысить)\s([0-9]+)$/i, 

async (message, bot) => { 
message.user.foolder += 1;
let clanidd = message.user.clanid; 
if(!clans[clanidd]) return bot(`у вас нет клана! 
❓ Для вступления введите «Клан войти [ID]»`); 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 
if(user.uid === message.user.uid) return bot(`неверный ID`); 

let clanid = user.clanid; 
if(!clans[clanid]) return bot(`этот человек не состоит в клане`); 
if(clans[clanid].users[message.user.uid].level < 3) return bot(`повышать может только создатель клана!`); 


if(!clans[clanid]) return bot(`этот человек не состоит в клане!`); 
if(user.clanid != message.user.clanid) return bot(`игрок состоит в другом клане!`); 
if(clans[user.clanid].users[user.uid].level >= 2) return bot(`нельзя повысить игрока до создателя!`); 
clans[clanid].users[user.uid].level += 1; 
return bot(`игрок ${user.tag} был повышен в клане!`); 
}); 

cmd.hear(/^(?:клан понизить)\s([0-9]+)$/i, async (message, bot) => { 
message.user.foolder += 1;
let clanidd = message.user.clanid; 
if(!clans[clanidd]) return bot(`у вас нет клана! 
❓ Для вступления введите «Клан войти [ID]»`); 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 
if(user.uid === message.user.uid) return bot(`неверный ID`); 

let clanid = user.clanid; 
if(!clans[clanid]) return bot(`этот человек не состоит в клане`); 
if(clans[clanid].users[message.user.uid].level < 3) return bot(`понижать может только создатель клана!`); 


if(!clans[clanid]) return bot(`этот человек не состоит в клане!`); 
if(user.clanid != message.user.clanid) return bot(`игрок состоит в другом клане!`); 
if(clans[user.clanid].users[user.uid].level <= 0) return bot(`нельзя понизить игрока ниже участника!`); 
clans[clanid].users[user.uid].level -= 1; 
return bot(`игрок ${user.tag} был понижен в клане!`); 
}); 

cmd.hear(/^(?:клан кик)\s([0-9]+)$/i, async (message, bot) => { 
let clanidd = message.user.clanid; 
if(!clans[clanidd]) return bot(`у вас нет клана! 
❓ Для вступления введите «Клан войти [ID]»`); 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 
if(user.uid === message.user.uid) return bot(`неверный ID`); 

let clanid = user.clanid; 
if(!clans[clanid]) return bot(`этот человек не состоит в клане`); 
if(clans[clanid].users[message.user.uid].level < 3) return
bot(`кикать может только создатель клана!`); 


if(!clans[clanid]) return bot(`этот человек не состоит в клане!`); 
if(user.clanid != message.user.clanid) return bot(`игрок состоит в другом клане!`); 
clans[clanid].peoples -= 1; 
user.clanid = false; 
delete clans[clanid].users[user.uid]; 
return bot(`игрок ${user.tag} был кикнут из клане!`); 
}); 

cmd.hear(/^(?:клан войти|клан зайти|клан вход|клан присоединиться|клан присоедениться|клан)\s([0-9]+)$/i, async (message, bot) => { 
message.user.foolder += 1;
let clanid = message.user.clanid; 
if(clans[clanid]) return bot(`вы уже состоите в клане!`); 
if(!message.args[1]) return bot(`вы не указали ID клана!`); 
let idclan = message.args[1]; 

if(!clans[idclan]) return bot(`данного клана не существует! Укажите правильный ID клана.`); 
if(clans[idclan].delete == true) return bot(`данный клан удалён.`); 
if(clans[idclan].lvl == 0) { 
if(clans[idclan].peoples >= 5) return bot(`клан переполнен!`); 
}; 
if(clans[idclan].lvl == 1) { 
if(clans[idclan].peoples >= 15) return bot(`клан переполнен!`); 
}; 
if(clans[idclan].lvl == 2) { 
if(clans[idclan].peoples >= 25) return bot(`клан переполнен!`); 
}; 
if(clans[idclan].lvl == 3) { 
if(clans[idclan].peoples >= 50) return bot(`клан переполнен!`); 
}; 
if(clans[idclan].lvl == 4) { 
if(clans[idclan].peoples >= 100) return bot(`клан переполнен!`); 
}; 
if(clans[idclan].open == false) return bot(`🔒 Клан закрыт, доступ по приглашениям`); 
if(clans[idclan].open == true){ 
clans[idclan].peoples += 1; 
message.user.clanid = Number(message.args[1]); 
if(!clans[idclan].users[message.user]) { 
clans[idclan].users[message.user.uid] = { 
id: message.user.id, 
uid: message.user.uid, 
level: 1 
} 
} 
return bot(`вы вошли в клан «${clans[idclan].name}»!\nВведите "клан помощь" чтобы посмотреть команды клана!`); 
} 

}); 

cmd.hear(/^(?:клан покинуть)$/i, async (message, bot) => { 
message.user.foolder += 1;
let clanid = message.user.clanid; 
if(!clans[clanid]) return bot(`у вас нет клана! 
❓ Для вступления введите «Клан войти [ID]»`); 
clans[clanid].peoples -= 

1; 
message.user.clanid = false; 
delete clans[clanid].users[message.user.uid]; 
return bot(`вы покинули клан!`); 

});

cmd.hear(/^(?:clanid)$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.user.settings.adm < 9) return message.send(`❎ Доступ только у Администраторов ❎`);
if(!message.isChat) return bot(`команда работает только в беседе!`);
return message.send(`[🎉] » Всего ID кланов: ${clans.length}`);
});

cmd.hear(/^(?:setmoney)\s([0-9]+)$/i, async (message, bot) => {
message.user.foolder += 1;
if(message.user.settings.adm < 5) return message.send(`❎ Доступ только у Администраторов ❎`);

message.user.balance += message.args[1];

message.send(`Вы успешно выдали себе игровую валюту`);
});
