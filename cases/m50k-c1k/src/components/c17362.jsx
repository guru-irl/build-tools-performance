import React from 'react';
const LABEL_17362 = 'component_17362';
export function Component17362({ value = 17362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17362, 'data-value': derived.doubled }, children);
}
export default Component17362;
