
var getPosts = function() {
    var posts = [
      {
        id: 1,
        title: 'Foritficador',
        image: 'fact_about_Gon_Freecss.jpg',
        description: 'Será a força do time | Sem experiência | R$ 2.000',
        body: 'Vai arranjar um emprego tuco'
      },
      {
        id: 2,
        title: 'Materializador',
        image: '4487183-6438703546-Hunte.jpg',
        description: 'Será o estrategista da Equipe  | 5 anos | R$ 3.000',        
        body: 'Lineu, para de implicar com ele'
      },
      {
        id: 3,
        title: 'Transmutador',
        image: 'Killua_GI.jpg',
        description: 'Será a Retaguarda do time | 2 anos | R$ 2.500',
        body: 'Ai tinhô, para de roubar'
      },
      {
        id: 4,
        title: 'Manipulador',
        image: 'Illumi6.jpg',
        description: 'Será o negociador da equipe | 4 anos | R$ 6.000',
        body: 'Pô popozão da um dinheiro aí'
      },
      {
        id: 5,
        title: 'Especialista',
        image: 'maxresdefault.jpg',
        description: 'Será o líder da equipe | 10 anos | R$ 10.000',
        body: 'Agostinho'
      }
    ];
  
    return posts;
  }
  
  module.exports = {
    getPosts: getPosts
  }