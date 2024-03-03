/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import styled from '@emotion/styled/macro'
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const StyledDiv = styled.div<{ type?: 'PRIMARY' | 'NONE' }>(
  ({ type }) => `
  background-color: purple;
  color: ${type === 'PRIMARY' ? 'blue' : 'orange'};
`
);

const UpperStyledDiv = styled(StyledDiv)<{ size: number }>(
  ({ size }) => `
  font-size: ${size}px;
  font-weight: bold;
`
);

const Box = styled.div<{ color: string }>(
  ({ color }) => `
    height: 200px;
    width: 200px;
    background-color: ${color};
`
);

const Inner = styled.div`
  background-color: green;
`;

const Outer = styled.div`
  background-color: orange;

  ${Inner} {
    background-color: black;
    color: white;
  }
`;

function App() {
  const [state, setState] = useState('black');

  useEffect(() => {
    setState('red');
  }, []);

  console.log(state);

  return (
    <>
      <Box color={state} />
      <StyledDiv
        type="PRIMARY"
        css={css`
          background-color: green;
        `}
      >
        Styled Div
      </StyledDiv>
      {[10, 20, 30, 40, 50].map(num => (
        <UpperStyledDiv
          key={num}
          size={num}
          css={css`
            background-color: green;
          `}
          // style={{ fontSize: num }}
        >
          Upper Styled Div
        </UpperStyledDiv>
      ))}
      <div
        css={css`
          color: yellow;
          background-color: hotpink;
          &:hover {
            color: lightgreen;
          }
        `}
      >
        This has a hotpink background.
      </div>
      <Outer>
        outer
        <Inner>inner inside outer</Inner>
      </Outer>
      <Inner>inner outside outer</Inner>
    </>
  );
}

export default App;
