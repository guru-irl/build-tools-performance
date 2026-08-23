import React from 'react';
const LABEL_17193 = 'component_17193';
export function Component17193({ value = 17193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17193, 'data-value': derived.doubled }, children);
}
export default Component17193;
