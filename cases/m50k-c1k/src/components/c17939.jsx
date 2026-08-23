import React from 'react';
const LABEL_17939 = 'component_17939';
export function Component17939({ value = 17939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17939, 'data-value': derived.doubled }, children);
}
export default Component17939;
