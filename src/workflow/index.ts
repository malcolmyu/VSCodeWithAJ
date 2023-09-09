interface Item {
    title: string;
    subtitle: string;
    valid: boolean;
    uid?: string;
    arg?: string;
    autocomplete?: string;
    type?: string;
    quicklookurl?: string;
    icon?: any;
    mods?: any;
    text?: string;
}

class Workflow {
    constructor(
        private readonly results: Item[],
    ) {}

    output() {
        return this.results;
    }
}
