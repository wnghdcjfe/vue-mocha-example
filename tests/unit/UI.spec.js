import { expect } from 'chai'   
import { shallowMount } from '@vue/test-utils'
import UIComponent from '@/components/UI.vue' 

describe('UI.vue', () => {
  it('Should increase count when button is clicked', () => {
    const wrapper = shallowMount(UIComponent) 
    wrapper.find('.melogachejil').trigger('click')   
    expect(wrapper.text()).to.include('1')
  })
})