# Page-Loader

A new JavaScript API connected with css gives a few ready to use full customized preloaders for your website.

### Prerequisites

You must have installed JQuery before starting including a Page-Loader.

```
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
```

### Installing

You must include js and css files to your project first.
```
<script src="Page-Loader.js"></script>
<link rel="stylesheet" href="Page-Loader.min.css" type="text/css">
```
In your html file add preloader and loader div under body tag. In *'s place enter your choices (you can choose Preloaders in demo page or here ).
```
<div class="preloader-*">
    <div class="loader-*"></div>
</div>

```
For example
```
<div class="preloader-4">
    <div class="loader-2"></div>
</div>
```
Next in js file rewrite your choices for this example it will look like this
```
var loader_number = 2;
var preloader_number = 4;
```

Remember to give the same choices in html file and js file.

## Authors

* **Arian Orwat** - [Arianos11](https://github.com/Arianos11)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
