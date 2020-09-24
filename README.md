### Maze Generation

Yeah, so this generates mazes!
Kinda neat. 

## Using

I tried to make this obvious from the interface, but:
You can "Set" the dimensions of the maze, and then "Step" through the algorithm of generating it. If you've selected the option "Instant," you can generate the entire maze with one click. Otherwise, you can choose how many steps to run each time.

## Algorithm

This uses Krusgal's algorithm as shown on the Wikipedia page. I've made a maze generator in Java before, but I thought it would be easy and fun to implement in JS. It was.

## Approach

Previously in using this algorithm, I lacked the patience to read the Wikipedia link on how to efficiently merge sets. This time around, I was pleased to find that the recommended method used the same exact tree idea I had come up with myself, but with the ingenious twist of setting the root of the tree to directly be the parent of any of its children. It was a joy setting that up.

I wanted to draw the maze with Unicode's BOX DRAWING characters. I thought it would be a fun opportunity to use Marching Squares. But, internet standards had other plans. Any generally available monospace fonts did not seem to have the "Half lines," from U+2574-2577. I couldn't find a font I wanted that did, so I made my own Box Drawing font.

## My Font

Box Drawing (my font) defines the full 2500-257F range of characters in the Unicode Box Drawing category, in addition to u+20 (space), u+25a1, u+25aa, and u+25ab, which are all boxes of their own sort. These are all fixed width. In fact, the width and height of the letters are equal (which may eliminate some uses, but it's quite elegant for drawing boxes). The only characters not drawn to the specification are the Character Cell Arcs, 256D-2570, due to limitations in my font editor.
