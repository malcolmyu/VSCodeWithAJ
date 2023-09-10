import { Item } from './workflow';

// FIXME: 想办法把 exec 封装到这里
export function getAutoJumpPath(query: string[]): Item[] {
    const pathList = query.map((item) => item.replace(/^.+?__[1-9]__/, ''));
    // 去重
    const set = new Set<string>(pathList);

    return Array.from(set).map((item) => {
        const last = item.match(/\/([^/]+)$/);
        const title = last ? last[1] : item;

        return {
            title,
            subtitle: item,
            arg: item,
            valid: true,
        };
    });
}
