document.getElementById('service').addEventListener('mouseover', hovering)
var body=document.querySelector('body')

var container= document.createElement('div');
container.setAttribute('id' , 'container')

var mainDiv= document.createElement('div');
mainDiv.setAttribute('id' , 'serviceContainer')

var auto= document.createElement('div');
auto.setAttribute('id' , 'autoService')

mainDiv.append(auto)

body.append(container)
container.append(mainDiv)


function hovering(){
    // document.getElementById('service').style.backgroundColor='teal'

    var services=document.createElement('h4')
    services.setAttribute('id' , 'allServices')
    services.textContent='All Services';

    var autoCare=document.createElement('p')
    autoCare.setAttribute('id' , 'autoCare')
    autoCare.textContent='Auto Care Center Services';
    autoCare.setAttribute('class', 'para')


    var health=document.createElement('p')
    health.setAttribute('id' , 'health')
    health.textContent='Health Services';
    health.setAttribute('class', 'para')

    var registry=document.createElement('p')
    registry.setAttribute('id' , 'registry')
    registry.textContent='Registry, List & Gifts';
    registry.setAttribute('class', 'para')

    var custom= document.createElement('p')
    custom.setAttribute('id' , 'custom')
    custom.textContent='Custom Services';
    custom.setAttribute('class', 'para')

    var photo=document.createElement('p')
    photo.setAttribute('id' , 'photo')
    photo.textContent='Photo Services';
    photo.setAttribute('class', 'para')

    var financial=document.createElement('p')
    financial.setAttribute('id' , 'financial')
    financial.textContent='Financial Services';
    financial.setAttribute('class', 'para')

    var inspired=document.createElement('p')
    inspired.setAttribute('id' , 'financial')
    inspired.textContent='Get Inspired';
    inspired.setAttribute('class', 'para')


   


    mainDiv.append(services,autoCare,health,registry,custom,photo,financial,inspired )

    document.getElementById('container').addEventListener('mouseleave', function(){
      
        services.textContent='';
        autoCare.textContent='';
        health.textContent='';
        registry.textContent='';
        custom.textContent='';
        photo.textContent='';
        financial.textContent='';
        inspired.textContent='';

    })

    document.getElementById('autoCare').addEventListener('mouseover' , function(){

    var autoCareServices=document.createElement('p')
    autoCareServices.setAttribute('id' , 'autoCareServices')
    autoCareServices.textContent='Auto Care Center Services';
    autoCareServices.setAttribute('class', 'insideAutoCare')

    var autoBuying=document.createElement('p')
    autoBuying.setAttribute('id' , 'autoBuying')
    autoBuying.textContent='Auto Buying';
    autoBuying.setAttribute('class', 'insideAutoCare')

    var find=document.createElement('p')
    find.setAttribute('id' , 'find')
    find.textContent='Find an Auto Care Center';
    find.setAttribute('class', 'insideAutoCare')

    var img=document.createElement('img')
    img.setAttribute('src' , 'https://i5.walmartimages.com/dfw/4ff9c6c9-aca5/k2-_b8c562b4-1164-4243-a1bb-5553e744ad41.v1.jpg?odnHeight=142px&odnWidth=142px&odnBg=FFFFFF')

    auto.append(autoCareServices , autoBuying,find)

    
document.getElementById('autoCareServices').addEventListener('click', function(){
    console.log ('here')

})


    })
    document.getElementById('autoService').addEventListener('mouseleave', function(){
        console.log ('here')

      
        autoCareServices.textContent='';
        autoBuying.textContent='';
        find.textContent='';


    })

}

