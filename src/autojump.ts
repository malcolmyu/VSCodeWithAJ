import { Item } from "./workflow";

// FIXME: 想办法把 exec 封装到这里
export function getAutoJumpPath(query: string[]): Item[] {
    return query.map((item) => {
        const last = item.match(/\/([^/]+)$/);
        const title = last ? last[1] : item;
        const subtitle = item.replace(/^.+?__[1-9]__/, '');

        return {
            title,
            subtitle,
            arg: subtitle,
            valid: true,
        };
    });
}
