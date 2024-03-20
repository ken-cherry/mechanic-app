import styled from "styled-components";

const CustomersWrapper = styled.section`
  h2 {
    text-align: center;
  }
  table {
    border-bottom: 1px solid black;
    border: 2px solid black;
    margin: 0 auto;
  }
  th {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  /* tr {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    border-top: 1px solid black;
  } */
  tr {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  td {
    border-top: 1px solid black;
    /* text-align: center; */
  }
  .history {
    text-align: center;
  }
`;

export default CustomersWrapper;
