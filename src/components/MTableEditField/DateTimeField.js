import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React from 'react';

function DateTimeField({ forwardedRef, ...props }) {
  return (
    <LocalizationProvider locale={props.locale}>
      <DateTimePicker
        {...props}
        ref={forwardedRef}
        format="dd.MM.yyyy HH:mm:ss"
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

export default React.forwardRef(function DateTimeFieldRef(props, ref) {
  return <DateTimeField {...props} forwardedRef={ref} />;
});
