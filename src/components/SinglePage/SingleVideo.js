import { useContext, useEffect, useState ,Component} from "react";
import { Box, Button, ButtonGroup } from '@material-ui/core';
import { Skeleton } from '@mui/material'; 

import ReactPlayer from 'react-player'
import { useParams } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUp from '@mui/icons-material/VolumeUp';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import StudyMaterial from './StudyMaterial'
// function withParams(Component) {
//     return props => <Component {...props} params={useParams()} />;
//   }

class SingleVideo extends Component {

   

  state = {
    url: null,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  }

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    })
  }

 


  componentDidMount() {
    let { id   } = this.props.params;
   

    
     this.setState({url: `https://www.youtube.com/watch?v=${id}`});

 

}    

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing })
    this.setState({ light: !this.state.light })
  }
 

  handleToggleLight = () => {
    this.setState({ light: !this.state.light })
  }

  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop })
  }

  handleVolumeChange = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }

  handleSetPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }

  handleOnPlaybackRateChange = (speed) => {
    this.setState({ playbackRate: parseFloat(speed) })
  }

  handleTogglePIP = () => {
    this.setState({ pip: !this.state.pip })
  }

  handlePlay = () => {
   
    this.setState({ playing: true })
  }

  handleEnablePIP = () => {
     this.setState({ pip: true })
  }

  handleDisablePIP = () => {
     this.setState({ pip: false })
  }

  handlePause = () => {
     this.setState({ playing: false })
  }

  handleSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  handleSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  handleProgress = state => {
     // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  handleEnded = () => {
     this.setState({ playing: this.state.loop })
  }

  handleDuration = (duration) => {
  
    this.setState({ duration })
  }
 

  ref = player => {
    this.player = player
  }

  render () {
    const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = this.state
    const SEPARATOR = ' · '

    const SingleResult = ['Engnieering Admission Lecture 01'];
    return (

      <>
      
   
     <div className=" mx-auto ">
 
     <Box className="  bg-gradient-to-r from-slate-700 to-slate-800  " sx={{ width: '100%'}}> 
    
<div className="zz relative">
 
 
 <ReactPlayer id="myvideo"
 ref={this.ref}
 className='react-player'
 width="100%"
 height="80vh"
 url={url}
 pip={pip}
 playing={playing}
 controls={controls}
 light={light}
 loop={loop}
 playbackRate={playbackRate}
 volume={volume}
 muted={muted}
 
 onPlay={this.handlePlay}
 onEnablePIP={this.handleEnablePIP}
 onDisablePIP={this.handleDisablePIP}
 onPause={this.handlePause}
  onPlaybackRateChange={this.handleOnPlaybackRateChange}
 
 onEnded={this.handleEnded}

 onProgress={this.handleProgress}
 onDuration={this.handleDuration}
/>
 
</div>
<Box sx={{ height:"5vh"}}>
   
     <input class="
      form-range
      appearance-none
    w-full
      
      p-0
      bg-slate-900 -px-2
      focus:outline-none focus:ring-0 focus:shadow-none
    "
                    type='range' min={0} max={0.999999} step='any'
                    value={played}
                    onMouseDown={this.handleSeekMouseDown}
                    onChange={this.handleSeekChange}
                    onMouseUp={this.handleSeekMouseUp}
                  />


</Box>
<div className='flex items-center justify-around '>

<Button onClick={this.handlePlayPause}>{playing ? <PauseCircleFilledIcon/> : <PlayCircleFilledWhiteIcon/>}</Button>

<Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
<Button onClick={this.handleToggleMuted} > {muted ?   <VolumeOffIcon/> :  <VolumeUp />} </Button>
        
      </Stack>

<Box     sx={{
  
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        }
         
      }}
    >
    
<ButtonGroup size="small" aria-label="small button group">
<Button   className="focus:text-red-50 text-bold focus:bg-green-500"  onClick={this.handleSetPlaybackRate} value={1}>1</Button>,
  <Button className="focus:text-red-50 text-bold focus:bg-yellow-500 "   onClick={this.handleSetPlaybackRate} value={1.5}>1.5</Button>
  <Button className="focus:text-red-50 text-bold focus:bg-purple-500 "   onClick={this.handleSetPlaybackRate} value={1.75}>1.75</Button>
  <Button className="focus:text-red-50 text-bold focus:bg-red-500"  onClick={this.handleSetPlaybackRate} value={2}>2</Button>
      </ButtonGroup>

      </Box>
</div>

 
 </Box>
 
 <hr/> <br/>
<div className=" ">
<span  className="flex my-auto -rotate-90 items-center absolute top-40 right-0 w-1/5  opacity-5 hover:opacity-100">
 {/* <p>Volumn&nbsp;</p> */}
 <input class="  
      form-range
      appearance-none
    w-full
      h-2
      p-0
      bg-slate-700 -px-2
      focus:outline-none focus:ring-0 focus:shadow-none
    " type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} />
 </span>
  </div>
 <hr/> <br/>

<div className=' '>
   <StudyMaterial/>
</div>
     </div>  
      </> 

    )
  }
}
 
export default (props) => (
    <SingleVideo
        {...props}
        params={useParams()}
/>)
