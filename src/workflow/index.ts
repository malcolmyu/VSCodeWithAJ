export interface Item {
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

export class Workflow {
    private readonly results: Item[] = [];

    addItem(item: Item) {
        this.results.push(item);
    }

    output() {
        return JSON.stringify({ items: this.results });
    }
}
