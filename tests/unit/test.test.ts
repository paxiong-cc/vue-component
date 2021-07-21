import { shallowMount, VueWrapper } from '@vue/test-utils'
import PTest from '@/components/PTest/index.vue'

let wrapper: VueWrapper<any>

describe('测试组件', () => {
  beforeAll(() => {
    wrapper = shallowMount(PTest)
  })

  it('初始化', () => {
    expect(wrapper.get('div').text()).toBe('this is test')
  })
})
