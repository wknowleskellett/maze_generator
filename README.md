# Maze Generation

Yeah, so this generates mazes. Kinda neat.

Like the one below!

```
╷╶─┬─┬┬─┬───┬┬┬────┬┐
│┌╴╵╶┤╵╶┘┌╴╷╵│└─╴╶┬┘│
├┴┬╴┌┴╴╶─┤┌┼╴├╴┌──┼╴│
│╶┤╷╵┌─┬┬┼┤└╴╵┌┘╷╷╵╶┤
│┌┘└─┤╶┤╵│└┬╴╶┘╷││╶┐│
││┌┐┌┘╷└╴│╷└─╴╷│└┴─┤│
│╵╵├┴─┘┌┐├┴┬╴╶┴┴┐╶─┤│
│╶┬┘╷╶┐│╵╵╶┤╶─┐╷├╴╷││
├┐└─┼─┴┘╶┬┐├╴╶┤└┤╶┤││
│╵╶┬┘┌╴┌╴╵│└┐╷│╷└┬┤││
├┐╷╵┌┘╶┤╷╶┴┐├┼┘│┌┘└┤│
│└┼─┘╶┐└┤╶┬┘││┌┴┘┌┬┘│
│┌┘┌╴┌┘╶┼─┴┬┘└┘┌┐│└┬┤
│└╴│┌┘╷╶┼╴╶┘╶─┐╵└┴╴││
├─╴│├─┼╴├┐╷┌╴╶┴─┐┌╴╵│
├╴╶┴┤╶┼┐│└┘└┐╷╶┬┼┘┌┐│
├┬╴╷╵┌┘│└╴╶┬┘│┌┘└┬┘╵│
│╵╷└┬┤╶┤╷┌─┤┌┴┤┌┐╵╷╷│
├╴├╴│└┐│└┤╶┤└╴└┤│┌┘├┤
│╷│╶┤╷╵╵╷╵╷│┌╴╶┘├┘╶┘│
└┴┴─┴┴──┴─┴┴┴───┴──╴╵
```
I made my own font for this, so it looks better on the actual program.

## Using

Check it out on [my website](https://www.williamknowleskellett.dev/projects/maze-generator/ "Go generate a maze!").

Choose your maze dimensions and click `Set/Reset`. To start the program over at any point, click that button.

The default is to watch the algorithm step by step. To make the maze generation instantaneous, check `Instant` and click `Generate`.

The `Speed` field determines how many iterations of the algorithm occur every time `Step` is pressed.

After the maze is generated, you can click `Step` or `Generate` one more time to open entrances and exits at the top left and bottom right of the maze.

The webpage is printable. Click `Print` or use your browser's controls to print the page.

## Algorithm

This uses Krusgal's algorithm. This algorithm has pros and cons.

|         | Feature                                       |
|---------|-----------------------------------------------|
| &check; | Interesting to observe maze generation        |
| &cross; | Generates a maze that is interesting to solve |

## Approach

I made a new data structure for sets of objects, optimized for the two operations required by the algorithm:

- Check whether two coordinates are in the same set (each is in exactly one set)
- Join two sets, given an element from each set

I wanted to draw the maze with Unicode's BOX DRAWING characters. Since common fonts don't have all of these characters defined, my mazes couldn't be displayed in most browsers without a custom font. I made my own. 

## My Font

I had already tested my hand at font creation in the past, so I just used [FontStruct](https://fontstruct.com/fontstructions/show/1936682/boxdrawing2) and did the simplest thing I could. If you plan on using this font, don't use the FontStruct version. Use the [woff2](https://www.williamknowleskellett.dev/projects/maze-generator/assets/boxdrawing-webfont.woff2) or [woff](https://www.williamknowleskellett.dev/projects/maze-generator/assets/boxdrawing-webfont.woff) versions embedded in my site. Or reach out to me for standard font file types. Just because FontStruct had some bugs in the font that I fixed manually after downloading.
