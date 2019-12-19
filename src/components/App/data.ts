export class Data {

    getHeader = () => {
        const header = [
            {id: 1, name: "Заметки", href: '/notes'},
            {id: 2, name: "Персонажи", href: '/'},
        ];
        return header;
    };

    getList = () => {
        const list = [
            {id: 1, name: "Luke Skywalker", span: 1, href: "/people/1"},
            {id: 2, name: "C-3PO", span: 2, href: "/people/2"},
            {id: 3, name: "R2-D2", span: 3, href: "/people/3"},
            {id: 4, name: "Darth Vader", span: 4, href: "/people/4"},
            {id: 5, name: "Leia Organa", span: 5, href: "/people/5"},
            {id: 6, name: "Owen Lars", span: 6, href: "/people/6"},
            {id: 7, name: "Beru Whitesun lars", span: 7, href: "/people/7"},
            {id: 8, name: "R5-D4", span: 8, href: "/people/8"},
            {id: 9, name: "Biggs Darklighter", span: 9, href: "/people/9"},
            {id: 10, name: "Obi-Wan Kenobi", span: 10, href: "/people/10"},
        ];

        return list;
    }

}