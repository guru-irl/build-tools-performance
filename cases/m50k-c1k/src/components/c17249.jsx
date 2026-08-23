import React from 'react';
const LABEL_17249 = 'component_17249';
export function Component17249({ value = 17249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17249, 'data-value': derived.doubled }, children);
}
export default Component17249;
