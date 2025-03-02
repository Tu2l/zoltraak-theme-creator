"use client"

import { useState } from "react"
import { TextField, Button, Paper } from "@mui/material"

export default function ComponentCustomizer({ onCustomize }) {
  const [componentName, setComponentName] = useState("")
  const [variantName, setVariantName] = useState("")
  const [customStyles, setCustomStyles] = useState("")

  const handleCustomize = () => {
    try {
      const stylesObject = JSON.parse(customStyles)
      onCustomize(componentName, variantName, stylesObject)
      setComponentName("")
      setVariantName("")
      setCustomStyles("")
    } catch (error) {
      alert("Invalid JSON format for custom styles")
    }
  }

  return (
    <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
      <TextField
        label="Component Name"
        value={componentName}
        onChange={(e) => setComponentName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Variant Name"
        value={variantName}
        onChange={(e) => setVariantName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Custom Styles (JSON)"
        value={customStyles}
        onChange={(e) => setCustomStyles(e.target.value)}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      <Button variant="contained" color="secondary" onClick={handleCustomize} sx={{ marginTop: 2 }}>
        Add Component Variant
      </Button>
    </Paper>
  )
}

