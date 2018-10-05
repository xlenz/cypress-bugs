/// <reference types="Cypress" />

context('file 2', () => {
  beforeEach(() => {
    console.log('qwe')
  })

  it('f2 - t1', () => {
    expect(true).to.be.true
  })

  it('f2 - t2', () => {
    expect(false).to.be.true
  })

  it('f2 - t3', () => {
    expect(true).to.be.true
  })

  it('f2 - t4', () => {
    expect(true).to.be.true
  })
})
