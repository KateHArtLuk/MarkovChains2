var newyear_obj = {
	structure: ['<p>$address_1$ $address_2$!</p>\n<p>$context$ $results$</p>\n<p>\n$thanks$\n</p>\n<p>$uneasy_1$ $uneasy_2$ $uneasy_3$</p>\n<p>$wishes$</p>\n<p>$farewell$<p>\n<p>$hurray$</p>', '<p>$address_1$ $address_2$!</p>\n<p>$results$</p>\n<p>$uneasy_1$ $uneasy_2$ $uneasy_3$</p>\n<p>\n$thanks$\n</p>\n<p>$wishes$ $farewell$<p>\n<p>$hurray$</p>', '<p>$address_1$ $address_2$!</p>\n<p>$results$ $thanks$\n</p>\n<p>$uneasy_1$ $uneasy_2$ $uneasy_3$</p>\n<p>$wishes$</p>\n<p>$farewell$ $hurray$</p>', '<p>$address_1$ $address_2$!</p>\n<p>$results$ $thanks$\n</p>\n<p>$uneasy_1$ $uneasy_2$ $uneasy_3$</p>\n<p>$wishes$ $hurray$</p>'],
	year: ['2019', 'этот'],
	address_1: ['Дорогие', 'Уважаемые', 'Милые', 'Дорогие наши', 'Любимые наши'],
	address_2: ['друзья', 'коллеги', 'партнеры', 'соратники', 'все'],
	context: ['Вот и подходит к концу $this_wonderful$ $year$ год.', 'Постепенно заканчивается $this_wonderful$ $year$ год.', 'Не успели мы оглянуться, как $this_wonderful$ $year$ год подходит к концу.', 'Подходит к концу $this_wonderful$ $year$ год.', 'Слышите этот звук? Это $year$ год подходит к концу!', 'Вы, конечно, уже много раз слышали, что $year$ год подходит к концу. И это прекрасно!', 'Наконец-то $this_wonderful$ $year$ год подходит к концу!'],
	this_wonderful: ['этот прекрасный', 'этот незабываемый', 'удивительный', 'ни на что не похожий', '', '', '', ''],
	results: ['Этот год был $kakim$, $but_also$.'],
	kakim: ['непростым', 'сложным', 'насыщенным', 'невероятно насыщенным', 'насыщенным, сложным и противоречивым', 'трудным', 'наполненным трудностями и сложностями', 'не из простых'],
	but_also: ['но и не лишенным интересных моментов', 'хотя в нем было немало хорошего', 'но и во многом хорошим', 'но интересным', 'хотя и очень интересным и насыщенным'],
	thanks: ['Спасибо вам за $thanks_for$. $thanks2$', 'Мы благодарим вас за $thanks_for$. $thanks2$', 'От всей души благодарим вас за $thanks_for$. $thanks2$'],
	thanks_for: ['труд, вовлеченность и внимание', 'поддержку', 'поддержку и любовь', 'вашу вовлеченность и поддержку', 'ваше неравнодушие', 'честный труд и неравнодушие к нашей работе и жизни'],
	thanks2: ['', '', '', 'Благодаря вам мы смогли $mnogoe$. $thanks3$', 'Без вас всего этого бы не было, и мы бесконечно благодарны. $thanks3$', 'С вашей помощью мы смогли $mnogoe$. $thanks3$', 'Именно вы были неотъемлемой частью нашего успеха. $thanks3$', 'Именно вы стали неотъемлемой частью нашего успеха. $thanks3$',],
	thanks3: ['', '', '', 'Как говорят мудрейшие, вместе мы сила.', 'Для нас вы стали стимулом для кратного роста.', 'Ведь недаром говорят, что дружба объединяет людей куда сильнее, чем любовь!', 'Вы были с нами а самые тяжелые наши моменты года, и мы это бесконечно ценим.'],
	uneasy_1: ['Да, этот год был непростым.', 'Конечно, этот год нельзя назвать простым.', 'Год был непростым.', 'Этот год не был простым для нас с вами.', 'И пускай этот год был непростым', 'Пусть этот год и был трудным.', 'Да, этот год заставил нас попотеть.'],
	uneasy_2: ['$tous$ пришлось столкнуться с неожиданными трудностями.', '$tous$ пришлось столкнуться с трудностями.', 'Немногих из нас миновала чаша трудностей.', '$tous$ пришлось на собственном опыте испытать лишения и трудности.', '$tous$ не удалось в этом году отдохнуть как следует.'],
	tous: ['Нам', 'Многим из нас', 'Каждому из нас', 'Всем нам', 'И нам, и вам'],
	uneasy_3: ['$whatkindof$ $challenges$ преследовали нас на каждом шагу. $butweprevailed$!'],
	whatkindof: ['Экономические, политические и многие другие', 'Социальные и экономические', 'Рабочие', 'Бизнесовые', 'Профессиональные', 'Профессиональные и политические'],
	butweprevailed: ['Но $withyoursupport$ мы их преодолели', 'Но $withyoursupport$ мы справились', 'Но $withyoursupport$ мы смогли дать достойный отпор'],
	withyoursupport: ['', '', ', разумеется,', 'с вашей помощью', 'благодаря вам', 'благодаря вашей поддержке'],
	challenges: ['проблемы', 'трудности', 'вызовы', 'сложности'],
	mnogoe: ['многое', 'достичь многого', 'добиться успеха, о котором даже не думали мечтать', 'реализовать все наши планы', 'реализовать все наши мечты', 'сделать всё, о чем мечталось'],
	wishes: ['Желаем вам в новом году $wishyoythis$. Пусть $pust1$, $pust2$, а $pust3$!', 'Желаем вам в новом году $wishyoythis$. Пусть $poshlo_1$, а $poshlo_2$!'],
	poshlo_1: ['$iskorki$ наполнят бокалы', '$iskorki$ наполнят воздух'],
	iskorki: ['волшебные искорки', 'искорки счастья', 'волшебный перезвон чуда и искорки добра', 'настроение счастья и ожидание чуда', 'искорки радости и добра'],
	poshlo_2: ['$laughter$ не покидает вас', '$laughter$ сохранится на всю ночь', 'останется с вами на весь год'],
	laughter: ['сказочный смех', 'безудержное веселье', 'аромат мандаринов', 'ощущение чуда'],
	wishyoythis: ['счастья, здоровья и успеха', 'успеха и процветания', 'бесконечного счастья и радости', 'процветания и успеха', 'всего самого лучшего', 'удачи и успеха', 'гармонии и счастья'],
	pust1: ['все мечты сбываются', 'все планы реализуются'],
	pust2: ['вас не покинет удача', 'продажи растут', 'клиенты приходят с полными чемоданами денег'],
	pust3: ['в семье сохранится гармония, любовь и взаимопонимание', 'на личном фронте с вами случится $dreamcometrue$', 'вдохновение не покинет вас ни на минуту'],
	dreamcometrue: ['всё, о чем вы давно мечтали', 'всё самое сокровенное', 'то, о чем не принято говорить вслух'],
	farewell: ['До встречи в новом году!', 'Надеемся на плодотворное сотрудничество в новом году!', 'Уверены, в новом году мы продолжим наше плодотворное сотрудничество!', 'Не забывайте о нас в новом году!'],
	hurray: ['С новым годом!', 'С новым счастьем!', 'С новым годом и новым счастьем!', 'Ура!', 'Будьте счастливы! Ура! С новым годом!']
}

//Блок рандомизатора шаблонов 
function parse_keywords(string) {
	pattern = /\$\w+\$/g;
	keyword = string.match(pattern);
	if (keyword) {
		for (var i = keyword.length - 1; i >= 0; i--) {
			keyword[i] = keyword[i].replace(/\$/g, '');
		}
	}
	return keyword;
}

function replace_keyword(source, keyword, variant) {
	return (source.replace('$' + keyword + '$', variant));
}

function bake(object) {
	var result = randomize(object['structure']);
	do {
		keywords = parse_keywords(result);
		if (keywords) {
			for (var i = keywords.length - 1; i >= 0; i--) {
				if (object.hasOwnProperty(keywords[i])) {
					result = replace_keyword(result, keywords[i], randomize(object[keywords[i]]));
				}
			}
		}
		//result=prepOutput(result);
	} while (keywords);
	return result;
}

function randomize(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

function send(text) {
	document.getElementById('text_here').innerHTML = text;
	document.getElementById('source_here').textContent = text;
	document.getElementById('source_here').height = document.getElementById('source_here').scrollHeight;
}

//Генератор

function make_article() {
	result = bake(newyear_obj);
	//logActivity(msg, 'Попытался сгенерить статью с подзагами');
	send(result);
}