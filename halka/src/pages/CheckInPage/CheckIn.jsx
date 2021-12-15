import React, { useState } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import Responses from '../../components/Responses';
import QuestionHeader from '../../components/QuestionHeader';
import CheckInFooter from '../../components/CheckInFooter';

function CheckIn() {

  const [responseCount, setResponseCount] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const valueArray = [];

  // handleResponseClick = (value) => {
  //   valueArray.push(value)
  //   setResponseCount(responseCount + )
  // }
  

  return (
    // <div>
    //   <h1>CheckIn</h1>
    //   <Responses 
    //     // onResponseClick={handleResponseClick()}
    //   />
    // </div>
  <Card style={{margin:"auto"}}>
    <QuestionHeader currentQuestion = {currentQuestion}/>
    <Responses />
    <CheckInFooter />
  </Card>
  )
}


export default CheckIn;