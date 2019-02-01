export default function(kibana) {
  return new kibana.Plugin({
    uiExports: {
      app: {
        title: 'ezops',
        order: -100,
        description: 'EZOPS Styling',
        main: 'plugins/ezops/index.js',
        hidden: true
      }
    }
  })
}
