import React from 'react';
const LABEL_17004 = 'component_17004';
export function Component17004({ value = 17004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17004, 'data-value': derived.doubled }, children);
}
export default Component17004;
