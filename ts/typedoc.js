module.exports = {
  entryPoints: ['./src'],
  includeVersion: true,
  readme: 'README.md',
  sort: ['static-first', 'alphabetical'],
  excludeInternal: true,
  pluginPages: {
    pages: [
      {
        title: 'Issue #180 Reproduction',
        children: [{ title: 'Linked File', source: '../ts/spec.md' }],
      },
    ],
  },
}
