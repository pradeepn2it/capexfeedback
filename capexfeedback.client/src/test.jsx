import MaintainenceFormWrapper from "./MaintainenceForm.jsx";

import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Box, Button, Card, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Stack } from "@mui/material";
import * as React from 'react';
import { useTreeViewApiRef } from '@mui/x-tree-view/hooks/useTreeViewApiRef';

const ProjectForm = () =>{
  const apiRef = useTreeViewApiRef();
  const mainAbs= true;
  const handleSelectGridPro = (event) => {
    apiRef.current?.selectItem({
      event,
      itemId: 'grid-pro',
      keepExistingSelection: true,
    });
  };

  return <div>
    <h1>This is hte Project form</h1>
    <MaintainenceFormWrapper
      mainAbs= {mainAbs}
    />
    <Card sx={{ mt: -3, ml: 5, mr: 5 }}>
        <Stack spacing={2}>
          <div>
            <Button onClick={handleSelectGridPro}>Select grid pro item</Button>
          </div>

          <Box sx={{ minHeight: 352, minWidth: 250 }}>
            <SimpleTreeView
              apiRef={apiRef}
              defaultExpandedItems={['infrastructure', 'utilities', 'remarks']}
              multiSelect
              defaultSelectedItems={['infrastructure']}
            >
              {/* Infrastructure as the main branch */}
              <TreeItem itemId="infrastructure" label="Infrastructure">
                {/* Radio Buttons as child elements */}
                <Card sx={{ ml: 5, mr: 5, padding: 2, marginTop: 3, marginBottom: 3, boxShadow: 3 }}>
                  <FormControl>
                    <FormLabel id="infrastructure-radio-label">Infrastructure</FormLabel>
                    <RadioGroup row aria-labelledby="infrastructure-radio-label" name="infrastructure">
                      <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                  </FormControl>
                </Card>

                <TextField
                  sx={{ml:5, mr:5, display: 'flex', justifyContent:"center"}}
                  size="small"
                  variant="outlined"
                  placeholder="PO Number" />

                <Box sx={{mb:2}} />
              </TreeItem>

              <TreeItem
              itemId="utilities" label="Utilities">
                <Card sx={{ ml: 5, mr: 5, padding: 2, marginTop: 3, marginBottom: 3, boxShadow: 3 }}>
                  <FormControl>
                    <FormLabel id="utilities-radio-label">Utilities</FormLabel>
                    <RadioGroup row aria-labelledby="utilities-radio-label" name="utilities">
                      <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                  </FormControl>
                </Card>

                <TextField
                  sx={{ml:5, mr:5, display: 'flex', justifyContent:"center"}}
                  size="small"
                  variant="outlined"
                  placeholder="PO Number" />
                <Box sx={{mb:2}} />
              </TreeItem>

              {/* Remarks section */}
              <TreeItem itemId="remarks" label="Remarks">
                <Card sx={{ ml: 5, mr: 5, padding: 2, marginTop: 3, marginBottom: 3, boxShadow: 3 }}>
                  <TextField
                    size="small"
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your remarks"
                    multiline
                    rows={4}
                  />
                </Card>
              </TreeItem>
            </SimpleTreeView>
          </Box>
        </Stack>

      </Card>
  </div>
}

export default ProjectForm;