export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red')
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred')
    static readonly POSTMAN = new Tag('Postman', 'pink')
    static readonly CSS = new Tag('CSS', 'green')
    static readonly JAVA = new Tag('Java', 'orange')
    static readonly H2 = new Tag('H2', 'brown')
    static readonly SPRINGBOOT = new Tag('Spring Boot', 'green')
    static readonly JAVASCRIPT = new Tag('JavaScript', 'gold')
    static readonly HTML = new Tag('HTML', 'lightblue')

    private constructor(private readonly key: string, public readonly color: string) {


    }

    toString() {
        return this.key;
    }
}