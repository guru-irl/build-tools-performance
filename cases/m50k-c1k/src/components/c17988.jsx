import React from 'react';
const LABEL_17988 = 'component_17988';
export function Component17988({ value = 17988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17988, 'data-value': derived.doubled }, children);
}
export default Component17988;
