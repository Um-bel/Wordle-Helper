# Wordle-Helper

an algorithm to get wordle words 

# Intro

First off, a quick summary of how all this code works is that; it dosen't. 
Ok, well it does, it's just that it could be a tad bit more optimised, I just don't feel like it.
And, all things considered for how big the processes it's doing, it run's fairly fast. Just not *100%* efficently, like 87.65% efficently

# How to use

>Steps
>- download file
>- put in arguments 
>- run script

## Download file

There are multiple options to download the file. 
The most practical being, using git. If you have a git envrioment set up, use the command: 
```
git clone Um-bel/Wordle-Helper
or
git clone https://github.com/Um-bel/Wordle-Helper
```
The second most common would downloading through github. In the top right of the page click "Code" then, click "Download ZIP". Navigate to the location of the file, and extract it to the enviroment of your choice

## Put in arguments

Now, let's make this friggin' code actually work. The worst part of this program by far, is the data gathering. Obviously it's not going to just magically figure out: when, where, how, you're playing a wordle game. You're going to need to manually put in the data of the game. I recommend starting the game, and outting in the words as you go. 


To actually do such a thing, first you need to navigate to the enviroment of the extrated file. Then, open "args.json" in the code/text editor of your choice. 

```json
{
    "notUsed": [], 
    "unknowns": [], 
    "knowns": []
}
```
