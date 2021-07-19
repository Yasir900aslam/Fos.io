import { GeistProvider, CssBaseline } from '@geist-ui/react'
import HomeComponent from '../components/index'
export default function Home() {
  return (
    <GeistProvider>
      <CssBaseline />
      <HomeComponent />
  </GeistProvider>
  )
}
