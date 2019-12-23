export class Swapi {

    async getPerson(id?: string | number) {
        const person = await this.getResource('/people/',id);
        return this.getParams(person);
    }

    async getResource(url?:string, id?:string | number ) {
        const _apiBase = 'https://swapi.co/api';
        const res = await fetch(`${_apiBase}${url}${id}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }else {
            return await res.json();
        }
    }

    getParams(person: { name: string; hair_color: string; eye_color: string }) {
        return {
            name: person.name,
            hairColor: person.hair_color,
            eyeColor: person.eye_color,
        };
    }

}