import React from 'react';
const LABEL_17014 = 'component_17014';
export function Component17014({ value = 17014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17014, 'data-value': derived.doubled }, children);
}
export default Component17014;
