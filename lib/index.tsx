import moment from 'moment'
import 'moment/locale/id';

export const formatDate = (date: string): string => {
  moment.locale('id')
  return `${moment(date).format('LLLL')}`
}

export const formatCurrency = (number: number): string => {
  return new Intl.NumberFormat('id-ID', { style: 'decimal' })
    .format(number)
    .toString()
}
