interface IVRippleDirectiveOptions {
  /**
   *
   * @remarks
   * Y*  你可以设置 ·currentColor· to 能够自动使用元素的文本颜色
   *
   * @default
   * 'currentColor'
   */
  color: string
  /**
   * 第一次出现的透明度
   *
   * @default
   * 0.2 默认opacity 0.2
   */
  initialOpacity: number
  /**
   * 在透明度 结束的时候 stopped 的时候 我们设置透明度的大小
   *
   * @default
   * 0.1
   */
  finalOpacity: number
  /**
   * 动画持续事件
   *
   * @default
   * 0.4
   */
  duration: number
  /**
   * css 动画 从开始到结束 以相同的时间来执行动画
   *
   * @default
   * 'ease-out'
   */
  easing: string
  /**
   * 取消延迟时间
   *
   * @note
   * 类似于 debounceTime
   * @default
   * 75
   */
  delayTime: number
}

interface IVRipplePluginOptions extends IVRippleDirectiveOptions {
  /**
   * 用于覆盖指令的名称
   *
   * @remarks
   *
   * @example
   *
   * @default
   * 默认指令 ripple
   */
  directive: string
}

// 给可预见值 value 添加类型

interface IRippleDirectiveOptionWithBinding {
  value: IVRippleDirectiveOptions
}

const DEFAULT_PLUGIN_OPTIONS: IVRipplePluginOptions = {
  directive: 'ripple',
  color: 'currentColor',
  initialOpacity: 0.2,
  finalOpacity: 0.1,
  duration: 0.8,
  easing: 'ease-out',
  delayTime: 75
}

export { DEFAULT_PLUGIN_OPTIONS, IVRipplePluginOptions, IVRippleDirectiveOptions, IRippleDirectiveOptionWithBinding }
