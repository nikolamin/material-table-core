import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import React from 'react';

function TimeField({ forwardedRef, ...props }) {
  return (
    <LocalizationProvider locale={props.locale}>
      <TimePicker
        {...props}
        ref={forwardedRef}
        format="HH:mm:ss"
        value={props.value || null}
        onChange={props.onChange}
        clearable
        InputProps={{
          style: {
            fontSize: 13
          }
        }}
        inputProps={{
          'aria-label': `${props.columnDef.title}: press space to edit`
        }}
      />
    </LocalizationProvider>
  );
}

export default React.forwardRef(function TimeFieldRef(props, ref) {
  return <TimeField {...props} forwardedRef={ref} />;
});
