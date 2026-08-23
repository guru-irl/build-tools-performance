import React from 'react';
const LABEL_17812 = 'component_17812';
export function Component17812({ value = 17812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17812, 'data-value': derived.doubled }, children);
}
export default Component17812;
