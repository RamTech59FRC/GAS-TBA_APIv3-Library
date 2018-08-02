# Google Apps Script - The Blue Alliance APIv3 Library
## About
A library of all the available requests that can be pulled from The Blue Alliance APIv3. JSDoc is included on all functions. This Library does use [ImportJSON by Brad Jasper and Trevor Lohrbeer](https://github.com/bradjasper/ImportJSON "ImportJSON").
## Use
This can be used as a library by copying in all code to a standalone Google Apps Script File and using the code as a [library](https://developers.google.com/apps-script/guides/libraries "Google Apps Script Library"). 
In using this code, you will have to get an API Key from The Blue Alliance (detailed in [The Blue Alliance Developer APIs Page](https://www.thebluealliance.com/apidocs)) or else the library will not work.

To use as a Library and call from a spreadsheet, use the following code:

<details>
 <summary>LIB_FUNC</summary>

```js
function LIB_FUNC(libraryName, functionName) {
  var result;
  var lib = this[libraryName];
  var extraArgs = [];

  if (lib) {
    var func = lib[functionName];

    if (func) {
      if (arguments.length > 2) {
        extraArgs = Array.apply(null, arguments).slice(2);
      }

      result = func.apply(this, extraArgs);
    } else {
      throw "No such function: " + functionName;
    }
  } else {
    throw "No such library: " + libraryName;
  }

  return result;
}
```

Credit: [Joe Lynch's Answer - Stack Overflow](https://stackoverflow.com/questions/10759296/calling-a-google-app-script-library-from-a-google-spreadsheet-cell)

</details>

## Wiki
Check out the [Wiki Page](https://github.com/RamTech59FRC/GAS-TBA_APIv3-Library/wiki) to learn what functions are available and an in depth install guide
