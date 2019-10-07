import { expect } from 'chai'   
import { shallowMount } from '@vue/test-utils'
import PropsComponent from '@/components/Props.vue' 

describe('Props.vue', () => { 
  it('2개의 items가 올바르게 props로 넘어가 mount되어야 합니다.', () => {
    const items  = [1, 2]
    const wrapper = shallowMount(PropsComponent, {
      propsData : {items}
    })   
    expect(wrapper.findAll('li')).to.have.lengthOf(items.length)
  }) 
})