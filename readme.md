# sort-package-json

## Description

Automatically sorts package.json according to predefined schema.

// TODO: normalize-package-data

## Usage

### 1. Passing an object to sort

```js
import { sortPackageJson } from 'sort-package-json'

const packageJson = JSON.parse(await fs.promises.readFile('package.json'))
const sortedPackageJson = sortPackageJson(packageJson)
```

### 2. Passing location of package.json file

```js
import { sortPackageJsonFile } from 'sort-package-json'

// 'packageJsonFile' must be absolute path
const packageJsonFile = path.join(__dirname, 'package.json')
await sortPackageJsonFile(packageJsonFile)
```

## Acknowledgements

Inspired by [sort-package-json](https://github.com/keithamus/sort-package-json)
