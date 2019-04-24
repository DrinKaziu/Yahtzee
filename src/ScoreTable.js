import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {

  getTotalScore = () => {
    const { scores } = this.props;
    let totalScore = 0;
    for (let key in scores) {
      if (scores[key]) totalScore += scores[key]
    }

    return totalScore;
  }

  render() {
    const { scores, doScore, rolling } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow description={ones.description} name="Ones" score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)} rolling={rolling} />
              <RuleRow description={twos.description} name="Twos" score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)} rolling={rolling} />
              <RuleRow description={threes.description} name="Threes" score={scores.threes} doScore={evt => doScore("threes", threes.evalRoll)}rolling={rolling}  />
              <RuleRow description={fours.description} name="Fours" score={scores.fours} doScore={evt => doScore("fours", fours.evalRoll)} rolling={rolling} />
              <RuleRow description={fives.description} name="Fives" score={scores.fives} doScore={evt => doScore("fives", fives.evalRoll)} rolling={rolling} />
              <RuleRow description={sixes.description} name="Sixes" score={scores.sixes} doScore={evt => doScore("sixes", sixes.evalRoll)} rolling={rolling} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow description={threeOfKind.description} name="Three of Kind" score={scores.threeOfKind} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} rolling={rolling} />
              <RuleRow description={fourOfKind.description} name="Four of Kind" score={scores.fourOfKind} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} rolling={rolling} />
              <RuleRow description={fullHouse.description} name="Full House" score={scores.fullHouse} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} rolling={rolling} />
              <RuleRow description={smallStraight.description} name="Small Straight" score={scores.smallStraight} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} rolling={rolling} />
              <RuleRow description={largeStraight.description} name="Large Straight" score={scores.largeStraight} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} rolling={rolling} />
              <RuleRow description={yahtzee.description} name="Yahtzee" score={scores.yahtzee} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} rolling={rolling} />
              <RuleRow description={chance.description} name="Chance" score={scores.chance} doScore={evt => doScore("chance", chance.evalRoll)} rolling={rolling} />
            </tbody>
          </table>
        </section>
        <h2 style={{borderBottom: '2px solid purple'}}>Total Score: {this.getTotalScore()}</h2>
      </div>
    )
  }
}

export default ScoreTable;