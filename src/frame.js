import React from 'react'
import styles from './frame-style.js'

export default function Frame({ children }) {
  return <div style={styles.root} >{children}</div>
}
