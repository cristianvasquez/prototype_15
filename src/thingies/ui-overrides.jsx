import {
  DefaultKeyboardShortcutsDialog,
  DefaultKeyboardShortcutsDialogContent,
  TldrawUiMenuItem,
  toolbarItem,
  useTools,
} from 'tldraw'

export const uiOverrides = {
  tools (editor, tools) {
    // Create a tool item in the ui's context.
    tools.card = {
      id: 'card', icon: 'color', label: 'Card', kbd: 'c', onSelect: () => {
        editor.setCurrentTool('card')
      },
    }
    return tools
  }, toolbar (_app, toolbar, { tools }) {
    // Add the tool item from the context to the toolbar.
    toolbar.splice(4, 0, toolbarItem(tools.card))
    return toolbar
  },
}

export const components = {
  KeyboardShortcutsDialog: (props) => {
    const tools = useTools()
    return (<DefaultKeyboardShortcutsDialog {...props}>
        <DefaultKeyboardShortcutsDialogContent/>
        {/* Ideally, we'd interleave this into the tools group */}
        <TldrawUiMenuItem {...tools['card']} />
      </DefaultKeyboardShortcutsDialog>)
  },
}
