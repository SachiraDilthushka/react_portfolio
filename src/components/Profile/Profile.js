import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import CustomTimeline from '../Timeline/CustomTimeline';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const Profile = () => {
    // return (
    //     <div className="profile container_shadow">
    //         <div className="profile_name">
    //          <Typography className="name">Sachira Dilthushka</Typography>
    //          <Typography className="title">Software Engineer</Typography>
    //         </div>
    //         <figure className="profile_image">
    //             <img src={require("../../assets/Images/images.jpg")} alt=""/>

    //         </figure>
    //     </div>
    // )
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="profile container_shadow">
            <Card className={classes.root}>
                <Card className={classes.root}>

                    <CardHeader

                        title="SACHIRA DILTHUSHKA"
                        subheader="Software Engineer"
                    />
                    <CardMedia
                        className={classes.media}
                        image="../../assets/Images/displayImage.jpg"
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>

                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                        </CardContent>
                    </Collapse>
                    <CardContent>

                        <div className="profile_information">
                            <CustomTimeline />

                        </div>

                        <br />

                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="secondary" >Download CV</Button>


                        <Button size="small">Learn More</Button>
                    </CardActions>

                </Card>




            </Card>

            <br />


        </div>
    );
}

export default Profile
