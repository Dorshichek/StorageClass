class Storage {

  constructor( key, value, storage = localStorage,) {
    this.storage = storage
    this.key = key
    this.value = value
  }

  get() {
    return this.storage.getItem(this.key)
  }

  set() {
    this.storage.setItem(this.key, this.value)
  }

  clear() {
    this.storage.clear()
  }

  isEmpty() {
    const key = this.storage.getItem(this.key)
    return (!(key !== null && key !== undefined))
  }
}

const local = new Storage('first','value')

const session = new Storage('second','someValue', sessionStorage)

local.set()
console.log(local.get())
local.clear()
console.log(local.isEmpty())

session.set()
console.log(session.get())
session.clear()
console.log(session.isEmpty())

