// @remove-file-on-eject

'use strict';

const spawn = require('react-dev-utils/crossSpawn');

module.exports = (command, args, useTypescript) => {
  const devDependencies = [
    'husky',
    'lint-staged',
    ...(useTypescript ? [
      '@types/node',
      '@types/react',
      '@types/react-dom',
      '@types/jest',
      'tslint',
      'tslint-config-prettier',
      'tslint-plugin-prettier',
      'tslint-react',
      'typescript',
    ] : []),
  ];

  console.log(
    `Installing ${devDependencies.join(', ')} as dev dependencies ${command}...`
  );
  console.log();

  const devProc = spawn.sync(command, args.concat('-D').concat(devDependencies), {
    stdio: 'inherit',
  });

  if (devProc.status !== 0) {
    console.error(`\`${command} ${args.concat(types).join(' ')}\` failed`);
    return false;
  }

  return true;
};
