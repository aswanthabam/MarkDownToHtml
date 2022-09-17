# Markdown To HTML

[![ABAM](https://badgen.net/badge/ABAM/view/)](https://abam.herokuapp.com/projects/Niram)

## Installation

First you need to install ```python``` and ```pip```.Then clone the git repository and move to that directory:
```sh
git clone https://github.com/AVC-Tech/MarkDownToHtml.git
cd MarkDownToHtml
```
Then install the requirements by running the command:
```sh 
python -m pip install -r requirements.txt
```

## Usage 

To convert markdown to HTMl run the following command:
```sh 
python generate.py
```
This will automatically detect the file named ```README.md``` and convert it to html and save it to ```README.html```. To explicitly enter the input and output files use the following syntex:
```sh 
python generate.py [input_file] [output_file]
```

The html generated have class names and styles similar to github markdown render. (Thanks to ```grip``` python package 😇). You can use the stylesheet and script given below to apply those styles.
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/AVC-Tech/MarkDownToHtml@1.0.0/markdown.css" type="text/css" media="all" />
<script src="https://cdn.jsdelivr.net/gh/AVC-Tech/MarkDownToHtml@1.0.0/markdown.js" type="text/javascript" charset="utf-8"></script>
```

Note : The generated file doesnt contain full html script. it only has the elements for your markdown. You can copy and paste it anywhere you want and just include the styles to the page.

## Requirements
- Python
- Grip