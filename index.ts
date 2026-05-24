import concurrently from 'concurrently';

concurrently([
   {
      name: 'server',
      command: 'bun run dev',
      cwd: 'Packages/Server',
      prefixColor: 'cyan',
   },
   {
      name: 'client',
      command: 'bun run dev',
      cwd: 'Packages/Client',
      prefixColor: 'green',
   },
]);
