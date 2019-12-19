export class Swapi {

    _apiBase = 'https://swapi.co/api';

    getPhoto(id:number){
        const obj = ['null',"https://vignette.wikia.nocookie.net/ru.starwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest?cb=20061127144734",
        'https://vignette.wikia.nocookie.net/ru.starwars/images/3/35/C-3PO.png/revision/latest?cb=20131231163604','https://vignette.wikia.nocookie.net/ru.starwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20151106094927',
        'http://images.starwarscostumes.com/products/10008/1-1/authentic-replica-darth-vader-costume.jpg', 'https://vignette.wikia.nocookie.net/ru.starwars/images/9/9b/Princessleiaheadwithgun.jpg/revision/latest/scale-to-width-down/500?cb=20160718082114',
        'https://vignette.wikia.nocookie.net/shadesofthesuns/images/8/81/Owen-OP.jpg/revision/latest?cb=20190413001801', 'http://pm1.narvii.com/6168/6201034bae0783810a78a3bb1e19dde44176ae49_00.jpg',
        'https://vignette.wikia.nocookie.net/ru.starwars/images/c/cb/R5-D4_Sideshow.png/revision/latest?cb=20170324065206', 'https://vignette.wikia.nocookie.net/worldsgreatestheroes/images/9/97/Biggs_Darklighter.jpg/revision/latest?cb=20140501151546',
        'http://lostfilm.info/images/photo/103/21133799_1027963.jpg'];
        return obj[id]
    }

    async getResource(url?:string, id?:any) {
        const res = await fetch(`${this._apiBase}${url}${id}`);
        if (!res.ok) {
            return {
                name: "К сожалению, мы такого не нашли :("
            }
        }else {
            return await res.json();
        }
    }

    getParams(person:any, id:any) {
        const obj = {
            id: id,
            name: person.name,
            span: person.gender,
            hairColor: person.hair_color,
            eyeColor: person.eye_color
        };
        return obj;
    }

    async getPerson(id:number) {
        const person = await this.getResource('/people/',id);
        return this.getParams(person, id);
    }

    async getAllPersons(url?:string) {
        const res = await this.getResource('/people/', '');
        return res.results.map(this.transformPerson);
    }

    transformPerson(person: { name: any , href: string}){
        const obj = {
            name: person.name,
            href: `/${person.name}`,
        };
        return obj;
    }

}