# API reference of :

An class to extend standard Javascript errors.

---
&#x1F34E; **__Warning !__ Work in progress...**
---
## API

<a name="module_extended-error"></a>

### extended-error
An class to extend standard Javascript errors. Encapsulate {ExtendableError} from [es6-error]().

**Example**  
```js
const {ExtendedError} = require('extended-error')

// A custom error class.
class CustomError extends ExtendedError {

  // The constructor.
  constructor (...args) {
    super(...args)
  }
}

throw new CustomError('an error') // throw an error of custom type.
```

* [extended-error](#module_extended-error)
    * [~ExtendedError](#module_extended-error..ExtendedError)
        * [new ExtendedError(...args)](#new_module_extended-error..ExtendedError_new)

<a name="module_extended-error..ExtendedError"></a>

#### extended-error~ExtendedError
A base class for extended errors.

**Kind**: inner class of [<code>extended-error</code>](#module_extended-error)  
**Category**: error  
**Access**: public  
<a name="new_module_extended-error..ExtendedError_new"></a>

##### new ExtendedError(...args)
Create a new instance of {ExtendedError}


| Param | Description |
| --- | --- |
| ...args | The arguments. |

## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 [SAS 9 Février](https://9fevrier.com/)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>

***

_Documentation generated on Wed, 21 Feb 2018 11:29:34 GMT_

**Copyright &copy; 2018 [SAS 9 Février](https://9fevrier.com/)**
