import { expect } from 'chai'   
import { shallowMount } from '@vue/test-utils'
import PropsComponent from '@/components/Props.vue' 

describe('Props.vue', () => { 
  it('Should render Props.vue properly', () => {
    const items  = [1, 2]
    const wrapper = shallowMount(PropsComponent, {
      propsData : {items}
    })   
    expect(wrapper.findAll('li')).to.have.lengthOf(items.length)
  }) 
})