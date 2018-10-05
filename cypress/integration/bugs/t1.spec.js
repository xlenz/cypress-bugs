/// <reference types="Cypress" />

context('file 1', () => {
  beforeEach(() => {
    console.log('qwe')
  })

  it('f1 - t1', () => {
    expect(true).to.be.true
  })

  it('f1 - t2', () => {
    expect(true).to.be.true
  })

  it('f1 - t3', () => {
    expect(false).to.be.true
  })

  it('f1 - t4', () => {
    expect(true).to.be.true
  })
})
