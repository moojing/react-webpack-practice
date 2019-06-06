import { useContext } from 'react'
import { RouterContext } from './contexts'

export default function useRouter () {
  return useContext( RouterContext )
}