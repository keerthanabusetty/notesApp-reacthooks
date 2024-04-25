// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.div`
  display: flex;
  border-radius: 8px;
  border: solid 1px #cbd5e1;
  width: 100%;
  flex-direction: column;
  padding: 24px 16px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    width: 31%;
    min-width: 257px;
    margin: 0px 8px 24px 8px;
  }
`
export const Title = styled.div`
  line-height: 1.33;
  color: #334155;
  font-size: 22px;
  font-weight: 500;
  font-family: 'Roboto';
  margin: 0;
`
export const Note = styled.div`
  line-height: 22px;
  color: #334155;
  font-size: 15px;
  margin-top: 15px;
  font-family: 'Roboto';
`
