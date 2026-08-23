import React from 'react';
const LABEL_17314 = 'component_17314';
export function Component17314({ value = 17314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17314, 'data-value': derived.doubled }, children);
}
export default Component17314;
