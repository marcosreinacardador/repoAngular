/*
https://api.chucknorris.io/jokes/random
{
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "d5e3fj3kQy2zQ0m5HGR13w",
    "url": "https://api.chucknorris.io/jokes/d5e3fj3kQy2zQ0m5HGR13w",
    "value": "Chuck Norris can land a plane in Auto Pilot."
}*/

export class ChucknorrisWeb {
    value !: string;
    

    constructor(){
        this.value = '';
        
    }
}
