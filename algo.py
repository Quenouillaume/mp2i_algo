class Algorithm:
    def __init__(self, args, variables):

        self._var = {x: None for x in variables}
        self._var.update({x: None for x in args})
        self._transition = {}
        self.state = None
        self.end_state = None

    def load_data(self, **kwargs):
        self._var.update(kwargs)
        self.state = 0

    def _step(self):
        raise NotImplementedError

    def step(self):
        nxt = self._step()
        if nxt is None:
            self.state = self._transition[self.state]
        else:
            self.state = self._transition[self.state][nxt]

    def __getitem__(self, i):
        return self._var.get(i, None)

    def __setitem__(self, i, v):
        self._var[i] = v





## tri insertion

def swap(t, i, j):
    t[i], t[j] = t[j], t[i]


a = """
i = 0
while i < n:
    j = i
    while j > 0 and T[j-1] > T[j]:
        T[j], T[j-1] = T[j-1], t[j]
        j = j-1
    i = i + 1
"""

class InsertSort(Algorithm):
    def __init__(self):
        super().__init__(["T", "n"], ["i", "j"])

        self._transition[0] = 1
        self._transition[1] = [7, 2]
        self._transition[2] = 3
        self._transition[3] = [6, 4]
        self._transition[4] = 5
        self._transition[5] = 3
        self._transition[6] = 1
        self._transition[7] = 7

        self.end_state = None



    def _step(self):
        if self.state == 0:
            self["i"] = 0

        elif self.state == 1:
            return self["i"] < self["n"]

        elif self.state == 2:
            self["j"] = self["i"]

        elif self.state == 3:
            return self["j"] > 0 and self["T"][self["j"]-1] > self["T"][self["j"]]

        elif self.state == 4:
            swap(self["T"], self["j"], self["j"]-1)

        elif self.state == 5:
            self["j"] = self["j"] - 1

        elif self.state == 6:
            self["i"] = self["i"] + 1

        elif self.state == 7:
            pass
