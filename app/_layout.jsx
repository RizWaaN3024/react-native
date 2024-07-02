import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <>
        <Text>Header</Text>
        <Slot />
        <Text>Footer</Text>
    </>

  )
}

export default RootLayout
