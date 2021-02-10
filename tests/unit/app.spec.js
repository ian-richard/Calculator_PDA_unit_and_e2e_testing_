import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('Num changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5);
  })
})

describe('App.vue', () => {
    it('Subtract number', () => {
      const wrapper = shallowMount(App)
      wrapper.vm.previousTotal = 7
      wrapper.vm.subtract('4');
      expect(wrapper.vm.runningTotal).to.equal(3);
    })
  })

  describe('App.vue', () => {
    it('multiply numbers', () => {
      const wrapper = shallowMount(App)
      wrapper.vm.previousTotal = 3
      wrapper.vm.multiply('5');
      expect(wrapper.vm.runningTotal).to.equal(15);
    })
  })
  
  describe('App.vue', () => {
    it('divide numbers', () => {
      const wrapper = shallowMount(App)
      wrapper.vm.previousTotal = 21
      wrapper.vm.divide('7');
      expect(wrapper.vm.runningTotal).to.equal(3);
    })
  })
  
  describe('numberClick', () => {
    it('concatenate multiple number button clicks', () => { 
      const wrapper = shallowMount(App)
      wrapper.vm.numberClick(1)
      wrapper.vm.numberClick(9)
      wrapper.vm.numberClick(7)
      wrapper.vm.numberClick(0)
    expect(wrapper.vm.runningTotal).to.equal(1970)
    })
  })
  
  describe('operatorClick', () => {
    it('chain multiple operations together', () => {
      const wrapper = shallowMount(App)
      wrapper.vm.numberClick(10)
      wrapper.vm.operatorClick('+')
      wrapper.vm.numberClick(2)
      wrapper.vm.operatorClick('=')
      wrapper.vm.operatorClick('/')
      wrapper.vm.numberClick(3)
      wrapper.vm.operatorClick('=')
      wrapper.vm.operatorClick('-')
      wrapper.vm.numberClick(1)
      wrapper.vm.operatorClick('=')
    expect(wrapper.vm.runningTotal).to.equal(3)
    }) 
  })
  
  describe('clearClick', () => {
    it('clear the running total without affecting the calculation', () => {
      const wrapper = shallowMount(App)
      wrapper.vm.numberClick(1)
      wrapper.vm.numberClick(2)
      wrapper.vm.operatorClick('-')
      wrapper.vm.numberClick(2)
      wrapper.vm.operatorClick('=')
      wrapper.vm.operatorClick('*')
      wrapper.vm.numberClick(2)
      wrapper.vm.operatorClick('=')
      wrapper.vm.clearClick()
    expect(wrapper.vm.runningTotal).to.equal(0)
    expect(wrapper.vm.previousTotal).to.equal(20)
    })
  })