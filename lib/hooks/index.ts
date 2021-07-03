/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (): ThunkDispatch<any, null, AnyAction> &
  ThunkDispatch<any, undefined, AnyAction> &
  Dispatch<AnyAction> => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
