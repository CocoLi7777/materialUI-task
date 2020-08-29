import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '120ch',
  },

  margin: {
    margin: theme.spacing(3),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '35ch',
  },
  fullField: {
    maxWidth: '115.5ch',
  },
  selectField: {
    width: '18.5ch',
  },
}));

export default useStyles;
