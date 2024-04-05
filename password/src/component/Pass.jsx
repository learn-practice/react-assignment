import React, { useState } from "react";
import "./Password.css";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
function Password() {
  const [showButton, setShowButton] = useState(false);
  const [TextValue, setTextValue] = useState('');
  let handleTextValue = (e) => {
    setTextValue(e.target.value);
  };
  let changeButtonIcon = () => {
    setShowButton(!showButton);
    // setTextType(textType === 'password'?"text":"password");
  };

  return (
    <form>
      {showButton ? (
        <input
          type="text"
          name="text"
          value={TextValue}
          placeholder="Password"
          onChange={handleTextValue}
        />
      ) : (
        <input
          type="password"
          name="password"
          value={TextValue}
          placeholder="Password"
          onChange={handleTextValue}
        />
      )}
      {showButton ? (
        <FaRegEye className="btn" onClick={changeButtonIcon} />
      ) : (
        <FaRegEyeSlash className="btn" onClick={changeButtonIcon} />
      )}
    </form>
  );
}

export default Password;
