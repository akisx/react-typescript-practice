import * as React from 'react';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import RemoveIcon from 'material-ui-icons/Remove';
import { WithStyles, withStyles, StyleRules } from 'material-ui/styles';

interface Props {
  value: number;
  increment: () => {};
  decrement: () => {};
}

const styles: StyleRules = {
  counter: {
    padding: '24px'
  },
  counterBox: {
    display: 'flex',
    alignItems: 'center'
  },
  counterValue: {
    margin: '0px 24px'
  }
};

type ClassKey = keyof typeof styles;

const Counter = (props: Props & WithStyles<ClassKey>) => {
  const { value, classes } = props;
  return (
    <div className={classes.counter}>
      <Typography type="display1" gutterBottom={true}>
        Counter
      </Typography>
      <div className={classes.counterBox}>
        <Button raised={true} color="primary" onClick={props.decrement}>
          <RemoveIcon />
        </Button>
        <Typography type="button" className={classes.counterValue}>
          count: {value}
        </Typography>
        <Button raised={true} color="primary" onClick={props.increment}>
          <AddIcon />
        </Button>
      </div>
    </div>
  );
};

export default withStyles<ClassKey>(styles)<Props>(Counter);
