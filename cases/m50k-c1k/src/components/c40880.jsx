import React from 'react';
const LABEL_40880 = 'component_40880';
export function Component40880({ value = 40880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40880, 'data-value': derived.doubled }, children);
}
export default Component40880;
