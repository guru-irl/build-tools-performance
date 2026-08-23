import React from 'react';
const LABEL_17917 = 'component_17917';
export function Component17917({ value = 17917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17917, 'data-value': derived.doubled }, children);
}
export default Component17917;
