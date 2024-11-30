abstract class VoteSystem {
    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}
  
class Election extends VoteSystem {
    private votes: { [key: string]: number } = {};

    voteFor(candidate: string): void {
        if (!this.votes[candidate]) {
            this.votes[candidate] = 0;
        }
        this.votes[candidate]++;
    }

    getResults(): object {
        return this.votes;
    }
}
  
class Poll extends VoteSystem {
    private votes: { [key: string]: number } = {};

    voteFor(candidate: string): void {
    if (!this.votes[candidate]) {
        this.votes[candidate] = 0;
    }
        this.votes[candidate]++;
    }

    getResults(): object {
        return Object.entries(this.votes)
            .sort((a, b) => b[1] - a[1])
            .map(([candidate]) => candidate);
    }
}
  
const election = new Election();
election.voteFor("Pretinha - minha bolinha minha vida");
election.voteFor("Mili - 157 de comida");
election.voteFor("Pretinha - minha bolinha minha vida");
election.voteFor("Mili - 157 de comida");
console.log(election.getResults());

const poll = new Poll();
poll.voteFor("Pretinha - minha bolinha minha vida");
poll.voteFor("Pretinha - minha bolinha minha vida");
poll.voteFor("Mili - 157 de comida");
poll.voteFor("Mili - 157 de comida");
poll.voteFor("Mili - 157 de comida");
console.log(poll.getResults());