class Drag {
  private pageX = 0
  private pageY = 0
  private body?: HTMLBodyElement
  constructor() {}
  public run() {
    window.addEventListener('DOMContentLoaded', () => {
      this.body = document.querySelector('body')!

      this.body.addEventListener('mousedown', this.onMouseDown.bind(this))
    })
  }

  private onMouseDown(e: MouseEvent) {
    this.pageX = e.pageX
    this.pageY = e.pageY
    const mouseMoveCallBack = this.onMouseMove.bind(this)
    // 监听鼠标移动事件
    this.body!.addEventListener('mousemove', mouseMoveCallBack)
    // 监听鼠标抬起事件
    this.body!.addEventListener('mouseup', () => {
      // 移除鼠标移动事件
      this.body!.removeEventListener('mousemove', mouseMoveCallBack)
    })
    // 监听鼠标离开事件
    this.body!.addEventListener('mouseleave', () => {
      // 移除鼠标移动事件
      this.body!.removeEventListener('mousemove', mouseMoveCallBack)
    })
  }

  private onMouseMove(e: MouseEvent) {
    const x = this.pageX - e.pageX
    const y = this.pageY - e.pageY
    window.api.drag({ x, y })
  }
}

export default () => {
  const drag = new Drag()
  return { drag }
}
