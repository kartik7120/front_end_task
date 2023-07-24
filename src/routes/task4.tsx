import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";

export default function Task4() {

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [parentChecked1, setParentChecked1] = useState(false);
  const [parentChecked2, setParentChecked2] = useState(false);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1(event.target.checked);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2(event.target.checked);
  }

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked3(event.target.checked);
  }

  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked4(event.target.checked);
  }

  const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked5(event.target.checked);
  }

  const handleParentChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParentChecked1(event.target.checked);
    setChecked1(event.target.checked);
    setChecked2(event.target.checked);
  }

  const handleParentChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParentChecked2(event.target.checked);
    setChecked3(event.target.checked);
    setChecked4(event.target.checked);
    setChecked5(event.target.checked);
  }

  const children1 = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel control={<Checkbox checked={checked1} onChange={handleChange1} inputProps={{ 'aria-label': 'controlled' }}
      />} label="support" />
      <FormControlLabel control={<Checkbox checked={checked2} onChange={handleChange2} inputProps={{ 'aria-label': 'controlled' }} />} label="customer success" />
    </Box>
  )

  const children2 = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel control={<Checkbox checked={checked3} onChange={handleChange3} inputProps={{ 'aria-label': 'controlled' }} />} label="graphic design" />
      <FormControlLabel control={<Checkbox checked={checked4} onChange={handleChange4} inputProps={{ 'aria-label': 'controlled' }} />} label="product design" />
      <FormControlLabel control={<Checkbox checked={checked5} onChange={handleChange5} inputProps={{ 'aria-label': 'controlled' }} />} label="web design" />
    </Box>
  )

  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <div>
          <FormControlLabel control={<Checkbox checked={parentChecked1} onChange={handleParentChange1} />} label="customer service" />
          {children1}
        </div>
        <div>
          <FormControlLabel control={<Checkbox checked={parentChecked2} onChange={handleParentChange2} />} label="design" />
          {children2}
        </div>
        <a href="/" className="text-center">Home page</a>
      </div>
    </>
  )
}
