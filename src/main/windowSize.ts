import { BrowserWindow, IpcMainEvent } from 'electron'
import { ipcMain } from 'electron/main'

// 获取触发事件的窗口对象
const getWin = (event: Electron.IpcMainEvent) => {
  return BrowserWindow.fromWebContents(event.sender)!
}
ipcMain.on(
  'setWindowSize',
  (event: IpcMainEvent, opt: { aspectRatio: number; width?: number; height?: number }) => {
    const win = getWin(event)
    win.setAspectRatio(opt.aspectRatio)
    if (opt.width && opt.height) {
      win.setSize(opt.width, opt.height)
    }
    // console.log(opt)
  }
)
