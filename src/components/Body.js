import React, {Component} from "react";
import {Doughnut} from "react-chartjs-2";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import circle from '../Ellipse 835.svg'
import square from '../Rectangle 1970.svg'

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: {
                men: false,
                women: false
            },
            data: {
                labels: [
                    'Men',
                    'Women',
                ],
                datasets: [{
                    data: [50, 50],
                    backgroundColor: [
                        '#7B3FF2',
                        '#FFA52E',
                    ],
                }]
            }
        };
    }

    onValidate = (e) => {
        console.log("event", e.target.value)
        console.log("event", e.target.id)
        if (e.target.id === "men" && (this.state.data.datasets[0].data[0] < 0 || this.state.data.datasets[0].data[0] > 100)) {
            this.setState({
                error: {
                    men: true,
                    women: this.state.error.women
                }
            })
        } else {

            this.setState({
                error: {
                    men: false,
                    women: this.state.error.women
                }
            })

        }
        if (e.target.id === "women" && (this.state.data.datasets[0].data[1] < 0 || this.state.data.datasets[0].data[1] > 100)) {
            this.setState({
                error: {
                    men: this.state.error.men,
                    women: true
                }
            })
        } else {
            this.setState({
                error: {
                    men: this.state.error.men,
                    women: false
                }
            })
        }
    }
    onTodoChangeMen = (event) => {

        const {data} = this.state;
        const all = data.datasets[0].data[0] + data.datasets[0].data[1];
        const value = (event.target.value / all) * 100;
        this.setState({
            data: {
                ...data,
                ...data.labels,
                datasets: [{
                    ...data.datasets[0],
                    data: [
                        data[0] = value,
                        data[1] = 100 - value

                    ]
                }]
            }
        })
    }

    onTodoChangeWomen = (event) => {

        const {data} = this.state;
        const all = data.datasets[0].data[0] + data.datasets[0].data[1];
        const value = (event.target.value / all) * 100;
        this.setState({
            data: {
                ...data,
                datasets: [{
                    ...data.datasets[0],
                    data: [
                        data[0] = 100 - value,
                        data[1] = value
                    ]
                }]
            }
        })


    }


    render() {
        return (
            <div>
                <Grid container direction="column" justify="space-between"
                      alignItems="center">
                    <Grid item>
                    <Card style={{maxWidth: "999px",maxHeight:"628PX", margin: "5px"}}>
                        <CardContent>
                            <Typography variant="h6" style={{color: "#010A60",fontFamily:"Muli"}}>Representation at PayPal</Typography>
                            <Typography style={{color: "#010A60",textAlign:"left",fontFamily:"Muli",whiteSpace: "nowrap"}}>Display the representation across your organization,
                                from race and gender, to pride and service.</Typography>
                            <Grid container direction="row-reverse" alignItems="center" justify="space-evenly">
                                <Grid item>
                                    <form onBlur={(e) => this.onValidate(e)} autoComplete="off">
                                        <Grid container direction="column" justify="space-around">
                                            <Grid item>
                                                <TextField error={this.state.error.men} style={{border:"border: 0.5px solid #040464"}}
                                                           helperText={this.state.error.men && "Incorrect entry."}
                                                           id="men" label="Men %" variant="outlined"
                                                           onkeydown="event.preventDefault()"
                                                    onChange={(evt) => this.onTodoChangeMen(evt)}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField error={this.state.error.women}
                                                           helperText={this.state.error.women && "Incorrect entry."}
                                                           id="women" label="Women %" variant="outlined"
                                                    onChange={(evt) => this.onTodoChangeWomen(evt)}
                                                />
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                                <Grid item>
                                    <Doughnut data={this.state.data}/>
                                </Grid>


                            </Grid>
                        </CardContent>
                    </Card>
                    </Grid>

                <Grid item>
                <Grid container  justify="space-around" alignItems="center">
                    <Grid item>
                <Typography style={{color: "#010A60",fontFamily:"Muli"}}>
                    Ready to accelerate your diversity recruiting efforts?
                </Typography>
                    </Grid>

                    <Grid container justify="space-between" alignItems="center" >
                        <Grid item>
                            <img src={circle} alt={"circle"}/>
                        </Grid>
                    <Grid item>
                <input defaultValue="Enter your work email" variant="outlined" style={{background:"#EFF2F8",border: "none",
                    borderRadius: "10px",height:"38px"}}/>
                <Button style={{background: "#FFA52E", borderRadius: "100px", color: "#FFFFFF"}}> Schedule a
                    call</Button>
                    </Grid>
                        <Grid item>
                            <img src={square} alt={"square"}/>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                </Grid>
            </div>
        );
    }
}