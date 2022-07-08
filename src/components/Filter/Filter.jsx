import React from "react";
import style from "./Filter.module.css"
const Filter = ({value, onChange}) => (
  <label className ={style.label}>
    <span>Find contacts by name</span>
    <input
      type="text" 
      value={value} 
      onChange={onChange}
      className={style.input}/>
  </label>
)

export default Filter;