<h1>JS-CheckboxList</h1>
A checkbox list with plain javascript, parent and child checkboxes adapts the checkstate when required.

<a href="https://speed-mikem.github.io/JS-CheckboxList/" target="_blank">Please click here for the documentation page</a>

<details>
  <summary>This library works perfectly with extendedElements.js!</summary>
  ExtendedElements JS is a javascript library also created by me which will create prototype methods and attributes which are usefull yet using plain old javascript.
  There is no parser around it like jQuery.
  The methods in it are cross-browser supported and will grow by the time, even user submitted can be added through out the time!
  
  * When the extendedElements library is used, this library will use it's `hasClass (String className)` method, if not it will use a similar method in this library.
</details>

<h2> What is this product for?</h2>
In case you need a list of checkboxes which will automatically check/uncheck the underlaying and above checkboxes when necessary.
<details>
  <summary><b>Example:</b></summary>

  I have a list of checkboxes like so:
  * Group 1
  * * Sub Group 1
  * * * Item 1
  * * * Item 2
  * * Sub Group 2
  * * * Item 3
  * Group 2
  * * Item 4
  * Item 5

  The following will be selected when...

  ... I select Item 1:
  * Group 1
  * * Sub Group 1
  * * * Item 1

  ... I select Sub Group 1:
  * Group 1
  * * Sub Group 1
  * * * Item 1
  * * * Item 2

  ... I select Sub Group 2:
  * Group 1
  * * Sub Group 2
  * * * Item 3

  ... I select Group 1:
  * Group 1
  * * Sub Group 1
  * * * Item 1
  * * * Item 2
  * * Sub Group 2
  * * * Item 3

  ... I select item 5:
  * Item 5
</details>

<h2>Installation</h2>
Com'on this is just a JavaScript Library, shouldn't be that hard mate... Anyways...

* Download the files
* Place the scripts somewhere in your website www directory
* Include them into your browser using:

  ```
  <link type="text/css" rel="stylesheet" href="/css/libs/checkboxList.css" />
  <script type="text/javascript" src="/js/libs/checkboxList.js"></script>
  ```
  
* Enjoy

<h2>Usage</h2>
This product is very simple to use. All you need to do is keep your current coding style and use the appropriate id, class or even tag name to start of.

<details>
  <summary>Like the earlier used example:</summary>
  
  ```
  <checkbox-list>
    <ul>
      <li>
        <input type="checkbox" id="group1"/>
        <label for="group1">Group 1</label>
        <ul>
          <li>
            <input type="checkbox" id="sub-group1"/>
            <label for="sub-group1">Sub Group 1</label>
            <ul>
              <li>
                <input type="checkbox" id="item1"/>
                <label for="item1">Item 1</label>
              </li>
              <li>
                <input type="checkbox" id="item2"/>
                <label for="item2">Item 2</label>
              </li>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="sub-group2"/>
            <label for="sub-group2">Sub Group 2</label>
            <ul>
              <li>
                <input type="checkbox" id="item3"/>
                <label for="item3">Item 3</label>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <input type="checkbox" id="group2"/>
        <label for="group2">Group 2</label>
        <ul>
          <li>
            <input type="checkbox" id="item4"/>
            <label for="item4">Item 4</label>
          </li>
        </ul>
      </li>
      <li>
        <input type="checkbox" id="item5"/>
        <label for="item5">Item 5</label>
      </li>
    </ul>
  </checkbox-list>
  ```
  <a href="https://jsfiddle.net/maujohtb/" target="_blank" >See this library with the above examples in action with JSFiddle</a>
  
  <a href="https://speed-mikem.github.io/JS-CheckboxList/example" target="_blank" >See this library with the above examples in action with GitHub Pages</a>
  
  as said before `<checkbox-list>` may also be `<div id="checkboxList">` OR `<div class="checkboxList">`
</details>


<a href="https://speed-mikem.github.io/JS-CheckboxList/index" target="_blank">Please click here for the documentation page</a>
