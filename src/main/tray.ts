import { Menu, Tray, app, shell } from 'electron'
import path from 'path'

const createTray = () => {
  const tray = new Tray(
    path.join(
      __dirname,
      process.platform === 'darwin'
        ? '../../resources/icon/mac-iconTemplate@2x.png'
        : '../../resources/icon/win-icon.png'
    )
  )

  const contextMenu = Menu.buildFromTemplate([
    {
      label: '司机的B站',
      click: () => {
        shell.openExternal('https://space.bilibili.com/39806072')
      }
    },
    {
      label: '司机的博客',
      click: () => {
        shell.openExternal('https://blog.ylmty.cc')
      }
    },
    { type: 'separator' },
    {
      label: '退出',
      click: () => {
        app.quit()
      }
    }
  ])
  tray.setContextMenu(contextMenu)

  tray.setToolTip('司机的监控摄像头')
}

export default createTray
