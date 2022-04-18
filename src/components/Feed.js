import React from "react";
import FeedItem from "./FeedItem";

const feedList = [
  {
    title: 'Harry Potter Books Spark Rise In Satanism Among Children',
    author: 'Gerry',
    body: 'LOCK HAVEN, PA—Ashley Daniels is as close as you can get to your typical 9-year - old American girl.A third- grader at Lock Haven Elementary School, she loves rollerblading, her pet hamsters Benny and Oreo, Britney Spears, and, of course, Harry Potter.Having breezed through the most recent Potter opus in just four days, Ashley is among the millions of children who have made Harry Potter And The Goblet Of Fire the fastest - selling book in publishing history.'
  },
  {
    title: 'Johnson & Johnson Introduces \'Nothing But Tears Shampoo\' To Toughen Up Newborns',

    author: 'Samuel',

    body: 'NEW BRUNSWICK, NJ—After decades of coddling young children, Johnson & Johnson unveiled its new Nothing But Tears shampoo this week, an aggressive bath-time product the company says will help to prepare meek and fragile newborns for the real world. A radical departure for the health goods manufacturer, the new shampoo features an all-alcohol-based formula, has never once been approved by leading dermatologists, and is as gentle on a baby\'s skin as "having to grow up and fend for your goddamn self."'


  }
];

function Feed() {
  return (
    <React.Fragment>
      <hr />
      {feedList.map((article, index) =>
        <FeedItem title={article.title}
          author={article.author}
          body={article.body}
          key="index" />
      )}
    </React.Fragment>
  );
}

export default Feed;