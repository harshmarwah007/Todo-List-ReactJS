import React  from "react";

const TodoItems = (props) => {

  return(
    <div onClick={()=>(
      props.onChecked(props.id)
    )}>
      <li>
        {props.text}
      </li>
    </div> 
  );
};
export default TodoItems;
