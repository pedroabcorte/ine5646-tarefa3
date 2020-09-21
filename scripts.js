const list = [
	{
		title: 'Samsung X480',
		image: './images/01 - Samsung X480.jpg',
		text: 'Sem câmera nem Bluetooth, este é o celular mais antigo que consigo me lembrar. Muitos créditos foram desperdiçados em jogos via GPRS neste aparelho lançado em 2005.',
		likes: 479,
		dislikes: 5
	},
	{
		title: 'Nokia 6111',
		image: './images/02 - Nokia 6111.jpg',
		text: 'Meu primeiro celular com câmera e Bluetooth, este teve sorte de não ser quebrado pelas constantes deslizadas que sofria. O botão de câmera dedicado fazia qualquer um se sentir um fotógrafo. Eu cheguei até mesmo a gravar um rap com este aparelho que também foi lançado em 2005.',
		likes: 6110,
		dislikes: 5
	},
	{
		title: 'Motorola V3 (RAZR)',
		image: './images/03 - Motorola V3 (RAZR).jpg',
		text: 'Evolução ou não? O Motorola V3 (ou RAZR nos Estados Unidos) foi meu terceiro aparelho. Era um dos aparelhos mais populares no auge do flip phone em 2004, muito antes dos smartphones.',
		likes: 33333,
		dislikes: 3
	},
	{
		title: 'Motorola Defy',
		image: './images/04 - Motorola DEFY.jpg',
		text: 'Meu primeiro smartphone mesmo foi um Android. O Motorola DEFY era absolutamente melhor que todos os aparelhos que eu tive antes, mas o sistema operacional ainda era muito infantil no ano de 2010. Bons tempos Flash, bons tempos...',
		likes: 9351,
		dislikes: 1337
	},
	{
		title: 'iPhone 4S',
		image: './images/05 - iPhone 4S.jpg',
		text: 'Depois de algum tempo carregando um iPod junto do smartphone, aparelho o qual era quase símbolo de status entre os coleguinhas do colégio, eu obtive o meu primeiro iPhone. Um clássico com um dos melhores designs que a Apple já concebeu (argumentável, claro) em 2011.',
		likes: 9001,
		dislikes: 0
	},
	{
		title: 'iPhone 5C',
		image: './images/06 - iPhone 5C.jpg',
		text: '"Quem precisa de um leitor de digital?". Este foi meu argumento que resultou no iPhone 5C entrando nas mãos da família antes de ser passado para mim, e a tela 16:9 era apenas o começo da evolução que os smartphones iam sofrer a partir de 2013.',
		likes: 5005,
		dislikes: 50
	},
	{
		title: 'iPhone 5S',
		image: './images/07 - iPhone 5S.jpg',
		text: 'Não demorou muito para o mesmo leitor de digital que havia sido criticado chegar nas minhas mãos, e a pergunta de outrora nunca mais me veio à mente desde 2013.',
		likes: 10010,
		dislikes: 100
	},
	{
		title: 'LG G4',
		image: './images/08 - LG G4.jpg',
		text: 'iPhones sempre foram muito caros, mas eu queria um aparelho maior. Foi assim que recebi um LG G4, um aparelho com uma grande tela 2K de 5.5 polegadas que era instável e com um defeito de fábrica que deixava o aparelho inutilizável do nada. Esse foi o primeiro aparelho que manchou o nome LG na minha mente em 2015.',
		likes: 666,
		dislikes: 946785164
	},
	{
		title: 'iPhone 6S',
		image: './images/09 - iPhone 6S.jpg',
		text: 'De volta ao território familiar, o iPhone 6S era menor, mas muito mais confiável e estável. Porém, mesmo com o novo 3D Touch e uma das melhores câmeras de vídeo da época, o tamanho não ia deixar de ser um incômodo, mesmo que apenas algum tempo depois de 2015.',
		likes: 66666,
		dislikes: 66
	},
	{
		title: 'LG G6',
		image: './images/10 - LG G6.jpg',
		text: 'Mais uma tentativa no lado Android, mas mais um exemplo que até hoje me leva a não recomendar aparelhos da LG para ninguém. Mesmo sendo um dos primeiros smartphones com o novo tamanho de tela 2:1 (ou 18:9), os bugs gráficos e performance abaixo do esperado deixaram muito a desejar em 2017.',
		likes: 5000,
		dislikes: 150000
	},
	{
		title: 'iPhone XR',
		image: './images/11 - iPhone XR.jpg',
		text: 'Mesmo com uma resolução bem baixa para o preço, o iPhone XR é meu aparelho atual e definitivamente o melhor que eu já tive. Ainda em 2020, este aparelho traz uma das melhores câmeras para vídeo em qualquer aparelho, porém o 3D Touch começou a desaparecer dos iPhones a partir deste modelo. Confiável, rápido e versátil, esse foi o iPhone de custo menor lançado em 2018 que ainda não me desapontou em nada.',
		likes: 10000000000,
		dislikes: -1
	}
];

class ListItem {
	constructor(title, image, text, likes, dislikes) {
		this.title = title;
		this.image = image;
		this.text = text;
		this.likes = likes;
		this.dislikes = dislikes;
	}

	getElement() {
		const itemContainer = document.createElement('div');
		itemContainer.className = 'item-container';

		const title = document.createElement('h1');
		title.innerText = this.title;
		title.className = 'item-title';
		itemContainer.appendChild(title);

		const img = document.createElement('img');
		img.src = this.image;
		img.className = 'item-image';
		itemContainer.appendChild(img);

		const text = document.createElement('P');
		text.innerText = this.text;
		text.className = 'item-text';
		itemContainer.appendChild(text);

		const likeSubContainer = document.createElement('div');
		likeSubContainer.className = 'item-like-subcontainer'
		itemContainer.appendChild(likeSubContainer);
	
		// const de apoio para as function anônimas dos botões
		const auxLikes = this.likes;
		const auxDislikes = this.dislikes;

		const like = document.createElement('input'); // Uso isto ao invés de button para facilitar a adição de uma imagem no botão
		like.type = 'image';
		like.src = 'images/likeButton.png';
		like.className = 'item-like';
		like.addEventListener('click', function(){
			like.className = 'item-liked';
			dislike.className = 'item-dislike';

			like.src = 'images/likedButton.png'
			dislike.src = 'images/dislikeButton.png'

			likeCount.innerText = auxLikes + 1;
			likeCount.className = 'item-likeCount-active';
			dislikeCount.innerText = auxDislikes;
			dislikeCount.className = 'item-dislikeCount';
		});
		likeSubContainer.appendChild(like);

		const likeCount = document.createElement('p');
		likeCount.innerText = this.likes;
		likeCount.className = 'item-likeCount';
		likeSubContainer.appendChild(likeCount);

		const dislike = document.createElement('input'); // Uso isto ao invés de button para facilitar a adição de uma imagem no botão
		dislike.type = 'image';
		dislike.src = 'images/dislikeButton.png';
		dislike.className = 'item-dislike';
		dislike.addEventListener('click', function() {
			like.className = 'item-like';
			dislike.className = 'item-disliked';

			like.src = 'images/likeButton.png'
			dislike.src = 'images/dislikedButton.png'

			likeCount.innerText = auxLikes;
			likeCount.className = 'item-likeCount';
			dislikeCount.innerText = auxDislikes + 1;
			dislikeCount.className = 'item-dislikeCount-active';
		});
		likeSubContainer.appendChild(dislike);

		const dislikeCount = document.createElement('p');
		dislikeCount.innerText = this.dislikes;
		dislikeCount.className = 'item-dislikeCount';
		likeSubContainer.appendChild(dislikeCount);

		return itemContainer;
	}
}

// function abaixo sem nome, roda sozinha quando chamada no index.html
(function() {
	const listElement = document.getElementById('items-list');

	for (const item of list) {
		const finalItem = new ListItem(item.title, item.image, item.text, item.likes, item.dislikes);

		listElement.appendChild(finalItem.getElement());
	}
})()