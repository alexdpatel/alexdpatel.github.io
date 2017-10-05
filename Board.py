import random
import copy


class Board:
    def __init__(self, n):
        self.board = []
        self.solvedBoard = []
        self.n = n
        self.n2 = n**2

        # intialize board and solvedBoard
        for r in range(self.n2):
            new = []
            for c in range(self.n2):
                new.append(" ")
            self.board.append(new)
            # append a copy to sepereate refrence
            self.solvedBoard.append(new[:])

        #while a solvable puzzle hasnt been created
        while (self.board[0][0] == " "):
            self.InitalizeBoard()

        # self.displayConsole()

        for r in range(self.n2):
            for c in range(self.n2):
                # create a deep copy of board before board is modified
                self.solvedBoard[r][c] = self.board[r][c]
                # aproximantly show a known value 50% of the time for each r,c
                if (random.random() < 1.5):
                    self.board[r][c] = self.solvedBoard[r][c]
                else:
                    self.board[r][c] = " "

        # self.displayConsole()

    def InitalizeBoard(self):
        self.clear()
        for r in range(self.n2):
            for c in range(self.n2):
                validVal = self.getValidVal(r, c)
                if (validVal == " "):
                    return None
                else:
                    self.board[r][c] = validVal

    def getValidVal(self, r, c):
        attempts = 0
        val = random.randint(1, self.n2)
        while (self.inRow(r, val) or self.inCol(c, val) or
               self.inQuadrant(r, c, val)):
            val = random.randint(1, self.n2)
            attempts += 1

            if (attempts > 100):
                self.board[0][0] = " "
                return " "

        return val

    def displayConsole(self):

        for l in range((2 * self.n)**2 + 1):
            print("_", end='')
        print()

        for r in self.board:
            print("| ", end='')
            for c in r:
                print(c, end=' | ')
            print()
            for l in range((2 * self.n)**2 + 1):
                print("_", end='')
            print()

    def setVal(self, r, c, val):  # needs to test
        if not (self.inRow(r, val) or self.inCol(c, val) or
                self.inQuadrant(r, c, val)):
            self.board[r][c] = val

    def inRow(self, r, val):
        for c in range(self.n2):
            if (self.board[r][c] == val):
                return True
        return False

    def inCol(self, c, val):
        for r in self.board:
            if (r[c] == val):
                return True
        return False

    def inQuadrant(self, r, c, val):
        qX = int(r / self.n) * self.n
        qY = int(c / self.n) * self.n

        for row in range(qX, qX + self.n, 1):
            for col in range(qY, qY + self.n, 1):
                if (self.board[row][col] == val):
                    return True
        return False

    def isWon(self):
        # possibly change to see if its equal to the generated solve
        for r in range(self.n2):
            if (self.inRow(r, " ") or self.inCol(r, " ")):
                return False
        return True

    def clear(self):
        for r in range(self.n2):
            for c in range(self.n2):
                self.board[r][c] = " "

    def type(self, string, turtle):
        turtle.hideturtle()
        turtle.write(
            string, move=False, align="center", font=("Arial", 42, "normal"))

    def displayTurtle(self, turtle, width):
        turtle.penup()
        deltaD = (width - 40) / self.n2
        for r in range(self.n2):
            for c in range(self.n2):
                if (self.board[r][c] != " "):
                    turtle.goto((c + .5) * deltaD,
                                ((self.n2 - r - .5 - (.1 * self.n))) * deltaD)
                    self.type(str(self.board[r][c]), turtle)
        turtle.goto(0, 0)
        turtle.pendown()

    def drawGrid(self, turtle, width, height, n):
        turtle.pendown()
        if (n < 4):
            turtle.pensize(10)
        else:
            turtle.pensize(1)

        deltaD = (width - 40) / n

        for i in range(n):
            for j in range(n):
                for k in range(4):
                    turtle.forward(deltaD)
                    turtle.left(90)
                turtle.forward(deltaD)

            turtle.backward(deltaD * n)
            turtle.left(90)
            turtle.forward(deltaD)
            turtle.right(90)

        turtle.goto(0, 0)
