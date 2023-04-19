// NÃO É NECESSÁRIO ENTENDER OU MODIFICAR ESTE ARQUIVO.

const fs = require('fs');
const path = require('path');

const { split, mkdir } = require('../tools/create');

const COMPONENT_ROOT = 'components';

try {
    const argv = process.argv;

    if (argv.length < 3) {
        throw new Error('Missing path');
    }
    if (argv.length > 3) {
        throw new Error('Too many arguments');
    }

    const [dirname, basename] = split(argv[2]);

    const context = {
        '{name}': basename,
    };

    let name, parts, outPath, inPath;

    name = `${basename}.js`;
    if (dirname === '.') {
        parts = [COMPONENT_ROOT, name];
    } else {
        parts = [COMPONENT_ROOT, dirname, name];
    }
    outPath = parts.join(path.sep);

    inPath = ['templates', 'Component.tpl'].join(path.sep);
    const template = fs.readFileSync(inPath, { encoding: 'utf8' });
    const regex = /(\{name\})/g;
    const content = template.replace(regex, (match) => context[match]);

    if (mkdir(outPath)) {
        fs.writeFileSync(outPath, content);
    }

    name = `${basename}.json`;
    if (dirname === '.') {
        parts = [COMPONENT_ROOT, name];
    } else {
        parts = [COMPONENT_ROOT, dirname, name];
    }
    outPath = parts.join(path.sep);

    inPath = ['templates', 'Component.json'].join(path.sep);

    if (mkdir(outPath)) {
        fs.copyFileSync(inPath, outPath);
    }
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}
