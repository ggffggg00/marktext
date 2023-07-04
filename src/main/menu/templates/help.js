import path from 'path'
import { shell } from 'electron'
import { isFile } from 'common/filesystem'
import * as actions from '../actions/help'

export default function () {
  const helpMenu = {
    label: '&Help',
    role: 'help',
    submenu: [{
      label: 'Quick Start...',
      click () {
        shell.openExternal('https://github.com/marktext/marktext/blob/master/docs/README.md')
      }
    }, {
      label: 'Markdown Reference...',
      click () {
        shell.openExternal('https://github.com/marktext/marktext/blob/master/docs/MARKDOWN_SYNTAX.md')
      }
    }, {
      label: 'Changelog...',
      click () {
        shell.openExternal('https://github.com/marktext/marktext/blob/master/.github/CHANGELOG.md')
      }
    }, {
      type: 'separator'
    }, {
      label: 'Donate via Open Collective...',
      click (item, win) {
        shell.openExternal('https://opencollective.com/marktext')
      }
    }, {
      label: 'Report Issue or Request Feature...',
      click () {
        shell.openExternal('https://github.com/marktext/marktext/issues')
      }
    }, {
      type: 'separator'
    }, {
      label: 'Website...',
      click () {
        shell.openExternal('https://github.com/marktext/marktext')
      }
    }, {
      label: 'Watch on GitHub...',
      click () {
        shell.openExternal('https://github.com/marktext/marktext')
      }
    }, {
      label: 'Follow us on Github...',
      click () {
        shell.openExternal('https://github.com/Jocs')
      }
    }, {
      label: 'Follow us on Twitter...',
      click () {
        shell.openExternal('https://twitter.com/marktextapp')
      }
    }, {
      type: 'separator'
    }, {
      label: 'License...',
      click () {
        shell.openExternal('https://github.com/marktext/marktext/blob/master/LICENSE')
      }
    }]
  }

  if (process.platform !== 'darwin') {
    helpMenu.submenu.push({
      type: 'separator'
    }, {
      label: 'About MarkText...',
      click (menuItem, browserWindow) {
        actions.showAboutDialog(browserWindow)
      }
    })
  }
  return helpMenu
}
