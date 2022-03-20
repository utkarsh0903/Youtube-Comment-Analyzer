import React, { useState } from "react";
import { PieChart, Pie } from "recharts";
import Sentiment from "sentiment";

function SentimentReview(props) {
  const sentiment = new Sentiment();
  const [sentimentInfo, setSentimentInfo] = useState({
    positive: null,
    negative: null,
    neutral:null
  });

  const data = [
    {name: 'Positive', students: sentimentInfo.positive, fill:'green'},
    {name: 'Negative', students: sentimentInfo.negative, fill:'red'},
    {name: 'Neutral', students: sentimentInfo.neutral, fill:'orange'}
  ];

  const comments=props.comments.map((item)=>{
    return item.props.children
  });
//console.log(comments);

function findSentiment(comments){

  comments.map(item=>{
    const result=sentiment.analyze(item);
  
  //console.log(result);
  return setSentimentInfo(prevValue=>{
    if(result.score>0){
      return {
        ...prevValue,
        positive:prevValue.positive+1
      };
    }
    else if(result.score<0){
      return {
        ...prevValue,
        negative:prevValue.negative+1
      };
    }
    else if(result.score===0){
      return {
        ...prevValue,
        neutral:prevValue.neutral+1
      };
    }
  })
})
}
// console.log(sentimentInfo.positive, sentimentInfo.negative, sentimentInfo.neutral);

  return (
    <div className="sentiment">
      <h3>Show number of positive, negative and neutral comments.</h3>
      <button onClick={()=>{findSentiment(comments)}} type="submit">Show</button>
      <PieChart className="chart" width={700} height={700}>
        <Pie data={data} dataKey="students" outerRadius={250} label fill={data.fill} />
      </PieChart>
    </div>
  );
}

export default SentimentReview;
