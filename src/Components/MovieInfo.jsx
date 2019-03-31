import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const styles = {
  dialogTitle:{
      color:'white'
  }
}

class MovieInfo extends React.Component {
  
  render() {
    const showMore = this.props.showMore
    const showRatings = this.props.ratings.map((rating) => {
      return(
        <p key={rating._id}>{`${rating.Source}: `}<span>{rating.Value}</span></p>
      )
    })

    return (
      <div>
        <Dialog
          open={this.props.show}
          aria-labelledby={"alert-dialog-title"}
          aria-describedby="alert-dialog-description"
          PaperProps={{
            style: {
              backgroundColor: '#DCDCDC',
              boxShadow: 'none',
            },
          }}
        >
          <DialogTitle style={styles.dialogTitle} id="alert-dialog-title">
          {`${this.props.title}`}
          <p>Year:<span>{`${this.props.year}`}</span></p>
          <p>Imbd:<span>{`${this.props.imdb}`}</span></p>
          {showMore ? (
          <React.Fragment>
          <p>{this.props.plot}</p>
          {showRatings}
          </React.Fragment>
          ):(<p></p>)}
          </DialogTitle>
          <DialogContent>
          <img className="poster-image" alt="poster" src={this.props.image} />
            <DialogContentText id="alert-dialog-description">
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.getInfo} color="primary">
              Get Info
            </Button>
            <Button onClick={this.props.handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default MovieInfo;
