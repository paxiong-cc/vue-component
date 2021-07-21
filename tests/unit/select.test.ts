import { shallowMount, VueWrapper } from '@vue/test-utils'
import PSelect from '@/components/PSelect/index.vue'

let wrapper: VueWrapper<any>

describe('测试组件', () => {
  beforeAll(() => {
    wrapper = shallowMount(PSelect)
  })

  it('初始化', () => {
    expect(wrapper.get('div').text()).toBe('this is select')
  })
})
