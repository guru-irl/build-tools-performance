import React from 'react';
const LABEL_17323 = 'component_17323';
export function Component17323({ value = 17323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17323, 'data-value': derived.doubled }, children);
}
export default Component17323;
