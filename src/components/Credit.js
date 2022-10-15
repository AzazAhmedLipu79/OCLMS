import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core"
 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Credit = () => {
  return (

    <>
        <Accordion className="w-1/2 mx-auto">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Credit</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
   1 Google Script,
   2 RoadsideCoder, 
   3 Material Ui,
   4 Tailwind,
   5 Meta & many more :3

          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
   
   
    


  );
};

export default Credit;

/*

1. On Scroll Loading cn

3. Header Change
onClick

*/