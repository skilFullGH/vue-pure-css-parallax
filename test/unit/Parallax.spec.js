// import Vue from 'vue'
import Component from '../../src/components/Parallax.vue'
// const expect = require('chai').expect

describe ('Component', () => {
  // Проверка опций компонента
  it ('has a data', () => {
    // expect(typeof Component.data).to.be.equal('function')
    expect(typeof Component.data).toBe('function')
  })
  // // Оценка результатов методов в опциях
  // it('sets the correct default data', () => {
  //   expect(typeof Component.data).toBe('function')
  //   const defaultData = Component.data()
  //   expect(defaultData.message).toBe('hello!')
  // })
  // // Анализ экземпляра компонента при монтировании
  // it('correctly sets the message when created', () => {
  //   const vm = new Vue(Component).$mount()
  //   expect(vm.message).toBe('bye!')
  // })
  // // Монтирование экземпляра и оценка вывода рендеринга
  // it('renders the correct message', () => {
  //   const Ctor = Vue.extend(Component)
  //   const vm = new Ctor().$mount()
  //   expect(vm.$el.textContent).toBe('bye!')
  // })
})
