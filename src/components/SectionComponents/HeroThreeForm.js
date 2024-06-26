import React, { useEffect, useRef, useState } from 'react';
import Input from '../Ui/Input';
import TheButton2 from '../Ui/TheButton2';
import Tooltip from '../Ui/Tooltip';
import classes from '../Ui/Tooltip.module.css';

const HeroThreeForm = (props) => {
  //using useRef and useState hooks
  const inputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  //END

  //Handling user data amount submission
  const onSubmitHandler = (event) => {
    //Prevent server side handling of inputted data
    event.preventDefault();
    //END

    //Accepting data using useref, converting the data into a string,
    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    //END

    //Checking and ensuring accepted data is between 1 to 5
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    //END

    //Passing accepted data to the HeroThreeSection component via prop
    props.onAddToCart(enteredAmountNumber);
    //END
  };
  //END

  //Dislaying Tooltips on dishes added to the menu
  const ontooltipHandler = () => {
    setShowTooltip(true);
  };

  const tipShow = `${showTooltip ? classes.show : ''}`;

  useEffect(() => {
    if (showTooltip === false) {
      return;
    }

    const toolTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 1000);

    return () => {
      clearTimeout(toolTimer);
    };
  }, [showTooltip]);
  //END

  //Layout and structure of form to be passed to the HeroThreeSection component
  return (
    <>
      <Tooltip className={tipShow} />
      <form onSubmit={onSubmitHandler}>
        <Input
          ref={inputRef}
          input={{
            id: Math.random() * 10,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
            style: {
              display: 'none', // Masquer visuellement l'input
            },
          }}
        />
        <TheButton2 type='submit' onClick={ontooltipHandler} className='width'>
          <i className='bi bi-plus'></i> Add
        </TheButton2>
      </form>
    </>
  );
};
//END

export default HeroThreeForm;
