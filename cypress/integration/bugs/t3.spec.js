/// <reference types="Cypress" />

context('file 3', () => {
  beforeEach(() => {
    console.log('qwe')
  })

  it('f3 - t1', () => {
    expect(false).to.be.true
  })

  it('f3 - t2', () => {
    expect(false).to.be.true
  })

  it('f3 - t3', () => {
    expect(true).to.be.true
  })

  it('f3 - t4', () => {
    expect(true).to.be.true
  })
})
