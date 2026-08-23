import React from 'react';
const LABEL_17145 = 'component_17145';
export function Component17145({ value = 17145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17145, 'data-value': derived.doubled }, children);
}
export default Component17145;
