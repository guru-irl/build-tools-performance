import React from 'react';
const LABEL_17182 = 'component_17182';
export function Component17182({ value = 17182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17182, 'data-value': derived.doubled }, children);
}
export default Component17182;
