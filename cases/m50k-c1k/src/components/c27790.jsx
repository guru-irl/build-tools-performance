import React from 'react';
const LABEL_27790 = 'component_27790';
export function Component27790({ value = 27790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27790, 'data-value': derived.doubled }, children);
}
export default Component27790;
