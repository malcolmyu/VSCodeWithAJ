import * as os from 'os';

function exec(commands: string[]): string {
    const [readOut, stdout] = os.pipe()!;
    const [readErr, stderr] = os.pipe()!;
    os.exec(commands, { stdout, stderr });
    const output = readOut.readAsString();
    const error = readErr.readAsString();

    return output ?? error;
}

export function getAutoJumpPath(query: string) {
    const directories: string = exec([`./runtime/autojump --completion ${query}`]);
    console.log(directories);
    // const candidates = directories.split('\n');
}