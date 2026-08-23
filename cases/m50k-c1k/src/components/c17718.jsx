import React from 'react';
const LABEL_17718 = 'component_17718';
export function Component17718({ value = 17718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17718, 'data-value': derived.doubled }, children);
}
export default Component17718;
