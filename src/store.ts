import { reactive } from 'vue'

interface ICountry {
  name: string
  unit: string
}

interface IPackage {
  name: string
  plus: number
}

export const globalState = reactive({
  name: '',
  age: 1,
  rate: 0,
  packageIndex: 0,
  countries: [
    { name: 'Hong Kong', unit: 'HKD' },
    { name: 'USA', unit: 'USD' },
    { name: 'Australia', unit: 'AUD' },
  ] as Array<ICountry>,
  packages: [
    { name: 'Standard', plus: 0 },
    { name: 'Safe', plus: 0.5 },
    { name: 'Super Safe', plus: 0.75 },
  ] as Array<IPackage>,
})
