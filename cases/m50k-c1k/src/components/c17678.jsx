import React from 'react';
const LABEL_17678 = 'component_17678';
export function Component17678({ value = 17678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17678, 'data-value': derived.doubled }, children);
}
export default Component17678;
