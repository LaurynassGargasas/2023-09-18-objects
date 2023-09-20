const posts = [
    {
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
      id: 7,
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
      id: 8,
      title: "dolorem dolore est ipsam",
      body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
      id: 9,
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
      id: 10,
      title: "optio molestias id quia eum",
      body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
    {
      id: 11,
      title: "et ea vero quia laudantium autem",
      body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    },
    {
      id: 12,
      title: "in quibusdam tempore odit est dolorem",
      body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
    },
    {
      id: 13,
      title: "dolorum ut in voluptas mollitia et saepe quo animi",
      body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
    },
    {
      id: 14,
      title: "voluptatem eligendi optio",
      body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
    },
    {
      id: 15,
      title: "eveniet quod temporibus",
      body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
    },
    {
      id: 16,
      title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
      body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
    },
    {
      id: 17,
      title: "fugit voluptas sed molestias voluptatem provident",
      body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
    },
    {
      id: 18,
      title: "voluptate et itaque vero tempora molestiae",
      body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
    },
    {
      id: 19,
      title: "adipisci placeat illum aut reiciendis qui",
      body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
    },
    {
      id: 20,
      title: "doloribus ad provident suscipit at",
      body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
    },
    {
      id: 21,
      title: "asperiores ea ipsam voluptatibus modi minima quia sint",
      body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
    },
    {
      id: 22,
      title: "dolor sint quo a velit explicabo quia nam",
      body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
    },
    {
      id: 23,
      title: "maxime id vitae nihil numquam",
      body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
    },
    {
      id: 24,
      title: "autem hic labore sunt dolores incidunt",
      body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
    },
    {
      id: 25,
      title: "rem alias distinctio quo quis",
      body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
    }
  ]

  console.log(posts)

  function task71 (){
    return posts[0]
  }
//   task71()

  
  function task72 (){
    return posts[24]
  }
//   task72()



  function task73(){
    return posts[14]
  }
//   task73()



  function task74(){
    return posts[posts.length - 13]
  }
//   task74()



  function task75(){
    let middle = Math.floor(posts.length / 2)
    return posts[middle]
  }
//   task75()



  function task76(){
    for(let i = 0; i <= 3; i++){
    }
    return posts[i]
  }
//   task76()



  function task77(){
    posts.slice(-5)
  }
//   task77()



  function task78() {
    posts.slice(4, 15)
  }
//   task78()



  function task79() {
    var kasAntroReiksmes = [];

    for (var i = 0; i < posts.length; i += 2) {
      kasAntroReiksmes.push(posts[i]);
    }
  
    return kasAntroReiksmes;
  }
//   task79()



  function task710(){
    var result = []

    result.push(posts[0])
    result.push(posts[posts.length - 1])
    console.log(result)

    return result
  }
//   task710()



function task711 (){
    let pirmasNarys = posts[0]
    console.log(pirmasNarys.title)
  }
//   task711()



  function task712 (){
    let pirmasNarys = posts[1]
    console.log(pirmasNarys.body)
  }
//   task712()



function task713 (){
    let pirmasNarys = posts[2]
    let title = pirmasNarys.title
    let body = pirmasNarys.body
    console.log(`Post title is: '${title}' and the content is: '${body}'.`)
  }
//   task713()


  function task714 (){
    for(let i = 0; i <= posts.length; i++){
        console.log(posts[i])
    }
  }
//   task714()



  function task715 (){
    for(let i = 0; i < posts.length; i++){
        console.log(posts[i].title)
    }
  }
//   task715()



  function task716 (){
    for(let i = 0; i < posts.length; i++){
        console.log(posts[i].body)
    }
  }
//   task716()



function task717 (){
    for(let i = 0; i < posts.length; i++){
        let title = posts[i].title
        let body = posts[i].body
        console.log(`Title: "${title}". Content: "${body}"`)
    }
  }
//   task717()



  function task718 (){
    for(let i = 0; i <= 3; i++){
        let title = posts[i].title
        let body = posts[i].body
        console.log(`Title: "${title}". Content: "${body}"`)
    }
  }
//   task718()



  function task719 (){
    for(let i = 18; i < posts.length; i++){
        let title = posts[i].title
        let body = posts[i].body
        console.log(`Title: "${title}". Content: "${body}"`)
    }
  }
//   task719()



  function task720(){
    let ul = document.querySelector('ul')

    for(let i = 0; i < posts.length; i++){
        let li = document.createElement('li')
        li.textContent = posts[i].title
        ul.append(li)
    }
  }
//   task720()



  function task721(){
    let ul = document.querySelector('ul')

    for(let i = 0; i < posts.length; i++){
        let li = document.createElement('li')
        li.textContent = `Title: "${posts[i].title}". Content: "${posts[i].body}".`
        ul.append(li)
    }
  }
//   task721()



  function task722(){
    let ul = document.querySelector('ul')

    for(let i = 0; i < posts.length; i++){
        if(posts[i].title.startsWith('s')){
            let li = document.createElement('li')
            li.textContent = `Title: "${posts[i].title}". Content: "${posts[i].body}".`
            ul.append(li)
        }
    }
  }
//   task722()



function task723(){
    let ul = document.querySelector('ul')

    for(let i = 0; i < posts.length; i++){
        if(posts[i].title.endsWith('t') || posts[i].title.endsWith('m')){
            let li = document.createElement('li')
            li.textContent = `Title: "${posts[i].title}". Content: "${posts[i].body}".`
            ul.append(li)
        }
    }
  }
//   task723()



  function task724(){
    let ul = document.querySelector('ul')

    for(let i = 0; i < posts.length; i++){
        if(posts[i].title.length > 15){
            let li = document.createElement('li')
            li.textContent = `Title: "${posts[i].title}". Content: "${posts[i].body}".`
            ul.append(li)
        }
    }
  }
//   task724()



  function task725(){
    let ul = document.querySelector('ul')

    for(let i = 0; i < posts.length; i++){
        let title = posts[i].title
        let body = posts[i].body

        if(title.length < 20 && body.length > 50){
            let li = document.createElement('li')
            li.textContent = `Title: "${posts[i].title}". Content: "${posts[i].body}".`
            ul.append(li)
        }
    }
  }
//   task725()



  function task726(){
    let ul = document.querySelector('ul')

    for(let i = 0; i < posts.length; i++){
        let title = posts[i].title
        let body = posts[i].body

        if(title.length > 20 < 30 && body.length > 70 < 130){
            let li = document.createElement('li')
            li.textContent = `Title: "${posts[i].title}". Content: "${posts[i].body}".`
            ul.append(li)
        }
    }
  }
//   task726()



  function task727(){
    let ul = document.querySelector('ul')

    for(let i = 0; i < posts.length; i++){
        let title = posts[i].title
        let body = posts[i].body

        if(title.includes('it') && body.includes('quo')){
            let li = document.createElement('li')
            li.textContent = `Title: "${title}". Content: "${body}".`
            ul.append(li)
        }
    }
  }
//   task727()



  function task728(){
    let ul = document.querySelector('ul')

    for(let i = 0; i < posts.length; i++){
        let title = posts[i].title
        let body = posts[i].body
        const regexOfA = /a/g
        const regexOfO = /o/g

        if((title.match(regexOfA) || []).length === 3 && (body.match(regexOfO) || []).length === 7){
            let li = document.createElement('li')
            li.textContent = `Title: "${title}". Content: "${body}".`
            ul.append(li)
        }
    }
  }
  // task728()



  function task730(){
    let ul = document.querySelector('ul')

    posts.sort(function(a, b) {
      return a.body.length - b.body.length
    })

    for(let i = 0; i < posts.length; i++){
        let title = posts[i].title
        let body = posts[i].body

          let li = document.createElement('li')
          li.textContent = `Title: "${title}". Content: "${body}".`
          ul.append(li)
    }
  }
  task730()