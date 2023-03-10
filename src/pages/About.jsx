import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { DetailTodo } from '../redux /modules/todos';

function About () {
  const dispatch = useDispatch();
  const {todo} = useSelector((state) => state.todos);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect (()=> {
    dispatch ( DetailTodo(id) );
  }, [dispatch, id]);

  return (
    <StContainer>
      <Stdeheader>
        <div> π΄ π‘ π’ My Todo List </div>
        <div> React β β </div>
      </Stdeheader>
      <StDetail>
        <Stdeid> {id} </Stdeid>
        <Stdetitle> {todo.title} </Stdetitle>
        <Stdecontent> {todo.content} </Stdecontent>
        <Stprebtn onClick={()=> {navigate("/");}}> μ΄μ μΌλ‘ </Stprebtn>
      </StDetail>
    </StContainer>
  )
}

export default About;

const StContainer = styled.div `
  max-width : 1200px;
  min-width : 800px;
  height : 500px;
  border-radius : 10px;
  margin : auto;
  background-color: #f2f2f2;

`
const StDetail = styled.div`
  width : 800px;
  height: auto;
  border-radius: 20px;
  background-color: #dddddd;
  padding: 15px;
  margin: 100px auto;
`

const Stdeid = styled.div `
  color : #009227;
  padding: 10px 20px;
  font-weight: bold;
`
const Stdeheader = styled.div`
  display: flex;
  height : 20px;
  background-color: #e1e1e1;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
const Stdetitle = styled.div `
  /* background-color : gray; */
  font-size : 35px;
  font-weight : bold;
  padding: 10px 20px;
  text-align-last : start;
  word-wrap: break-word;
`
const Stdecontent = styled.div `
  /* background-color : greenyellow; */
  font-size : 25px;
  color : #717171;
  padding: 10px 20px;
  text-align-last : start;
  word-wrap: break-word;
`

const Stprebtn = styled.button `
  width : 100px;
  height: 30px;
  font-size : 15px;
  font-weight: bold;
  color:  #009227;
  border: none;  
  border-radius: 10px;
  margin: 10px 20px;
  cursor : pointer;
`