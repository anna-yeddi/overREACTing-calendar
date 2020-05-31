import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

export default function Calendar({ date }) {
  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{date.format('dddd')}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.date()}</div>
          <div className="ui-datepicker-material-month">
            {date.format('MMMM')}
          </div>
          <div className="ui-datepicker-material-year">{date.year()}</div>
        </div>
      </div>

      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{date.format('MMMM')}</span>
          &nbsp;
          <span className="ui-datepicker-year">{date.year()}</span>
        </div>
      </div>

      <table className="ui-datepicker-calendar">
        {/* Highlight weekends based on a locale: */}
        <colgroup>
          {[...Array(7)].map((e, i) => (
            <col
              key={i}
              className={
                moment().day(i).format('ddd') === 'Sun' ||
                moment().day(i).format('ddd') === 'Sat'
                  ? 'ui-datepicker-week-end'
                  : null
              }
            />
          ))}
        </colgroup>

        <thead>
          <tr>
            {[...Array(7)].map((e, i) => (
              <th key={i} scope="col" title={moment().day(i).format('dddd')}>
                {moment().day(i).format('ddd')}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="ui-datepicker-other-month">27</td>
            <td className="ui-datepicker-other-month">28</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>6</td>
            <td>7</td>
            <td className="ui-datepicker-today" aria-current="true">
              8
            </td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Calendar.propTypes = {
  date: PropTypes.object,
}

//  <th scope="col" title="Monday">
//               Mon
//             </th>
//             <th scope="col" title="Tuesday">
//               Tue
//             </th>
//             <th scope="col" title="Wednesday">
//               Wed
//             </th>
//             <th scope="col" title="Thursday">
//               Thu
//             </th>
//             <th scope="col" title="Friday">
//               Fri
//             </th>
//             <th scope="col" title="Saturday">
//               Sat
//             </th>
//             <th scope="col" title="Sunday">
//               Sun
//             </th>

// <col />
// <col />
// <col />
// <col />
// <col />
// <col className="ui-datepicker-week-end" />
// <col className="ui-datepicker-week-end" />
