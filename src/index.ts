import { getAutoJumpPath } from './autojump';

function main() {
    const query: string = scriptArgs.pop() ?? '';
    console.log(getAutoJumpPath(query));
}

main();
