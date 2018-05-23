<h1>JS-CheckboxList</h1>
A checkbox list with plain javascript.

This library requires extendedElements.js!

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
  <link type="text/css" rel="stylesheet" href="<?= _URL ?>/css/libs/checkboxList.css" />
  <script type="text/javascript" src="<?= _URL ?>/js/libs/checkboxList.js"></script>
  ```
  
* Enjoy
