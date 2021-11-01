import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
<<<<<<< HEAD
    borderRadius: '10px',
    background: theme.palette.dark.blue['200'],
    height: '79px',
    display: 'flex',
=======
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.dark.blue['200'],
    border: `1px solid ${theme.palette.dark.blue['200']}`,
    height: '60px',
    display: 'flex',
    flexDirection: 'row',
>>>>>>> upstream/CHG-UI-REDESIGN
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
<<<<<<< HEAD
=======
    alignItems: 'center',
>>>>>>> upstream/CHG-UI-REDESIGN
  },
  circleIcon: {
    width: '20px',
    height: '20px',
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
  },
  name: {
<<<<<<< HEAD
    fontSize: '20px',
    paddingLeft: '15px',
  },
  testStatus: {
    alignSelf: 'flex-end',
    paddingBottom: '1px',
    paddingLeft: '10px',
=======
    fontSize: '16px',
    marginLeft: theme.spacing(1),
  },
  testStatus: {
    alignSelf: 'flex-end',
    marginLeft: theme.spacing(1),
>>>>>>> upstream/CHG-UI-REDESIGN
  },
  success: {
    color: theme.palette.color.green,
  },
  error: {
    color: theme.palette.color.red,
  },
  expand: {
<<<<<<< HEAD
=======
    fontSize: '14px',
>>>>>>> upstream/CHG-UI-REDESIGN
  },
}));
