# Fancy-Text-Box
## A React Component designed to make stylish and animated textboxes quick and easy

### Valid Props: 

#### - blurColor: Changes the border color of the input while the input box is not selected
#### - blurTextColor: Changes the text color of the input while the input box is not selected
#### - backgroundColor: Changes the color of the input box and is suggested that this color matches the background color of the parent
#### - fontSize: CHanges the size of the font while the input box is not selected
#### - focusColor: Changes the border color of the input while the input box is selected
#### - focusTextColor: Changes the text color of the input while the input box is selected
#### - width: Changes the width of the input
#### - height: Changes the height of the input
#### - name: Changes the text displayed on the input
#### - output: This will be called when the input is changed, and does whatever the function that is passed in does
#
## WARNING: The Parent Must have a z-index of -2 or smaller
#
##### All CSS values that would be valid for color can be used for blurColor, blurTextColor, focusColor, backgroundColor, and focusTextColor
##### All CSS values that would be valid for size can be used for fontSize, width, and height
##### Values returned from a input box are returned as e.target.value
