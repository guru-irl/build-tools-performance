import React from 'react';
const LABEL_17400 = 'component_17400';
export function Component17400({ value = 17400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17400, 'data-value': derived.doubled }, children);
}
export default Component17400;
