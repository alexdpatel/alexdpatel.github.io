from Board import Board
import random
import turtle
import math


def type(string):
    turtle.hideturtle()
    turtle.write(
        string, move=False, align="CENTER", font=("Arial", 28, "normal"))


def Welcome():
    turtle.hideturtle()
    turtle.penup()
    turtle.goto(width / 2, height / 2)
    type("Welcome to Sudoku")
    turtle.update()
    return int(
        turtle.textinput("Grid Size", "Please enter 2 or 3 to continue: "))


turtle.hideturtle()
turtle.tracer(0)

width = 500
height = 500

turtle.setworldcoordinates(-20, -20, 500, 500)

n = Welcome()  #int(input("Create a n^2 by n^2 Puzzle, Enter an N: "))
turtle.goto(0, 0)
turtle.clear()

b = Board(n)

b.displayConsole()
b.drawGrid(turtle, width, height, n)
b.drawGrid(turtle, width, height, n**2)
b.displayTurtle(turtle, width)
turtle.update()
