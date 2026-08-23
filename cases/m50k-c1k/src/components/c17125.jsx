import React from 'react';
const LABEL_17125 = 'component_17125';
export function Component17125({ value = 17125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17125, 'data-value': derived.doubled }, children);
}
export default Component17125;
