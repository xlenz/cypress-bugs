/// <reference types="Cypress" />

context('file 10', () => {
  beforeEach(() => {
    console.log('qwe')
  })

  it('f10 - t1', () => {
    expect(true).to.be.true
  })

  it('f10 - t2', () => {
    expect(false).to.be.true
  })

  it('f10 - t3', () => {
    expect(true).to.be.true
  })

  it('f10 - t4', () => {
    expect(true).to.be.true
  })
})
