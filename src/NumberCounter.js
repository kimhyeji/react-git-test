import React, { useState } from "react";

function NumberCounter() {
  const [no, setNo] = useState(0);

  const noIsEvenDiv = (
    <>
      <hr />
      <sapn>짝수입니다.</sapn>
    </>
  );

  return (
    <>
      숫자 : {no}
      <hr />
      <button onClick={() => setNo(no + 1)}>증가</button>
      {noIsEvenDiv}
    </>
  );
}

export default NumberCounter;