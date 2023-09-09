import { getAutoJumpPath } from './autojump';
import { Workflow } from './workflow';

function main() {
    scriptArgs.shift();
    const items = getAutoJumpPath(scriptArgs);
    const wf = new Workflow();
    items.forEach(item => wf.addItem(item));
    console.log(wf.output());
}

main();
