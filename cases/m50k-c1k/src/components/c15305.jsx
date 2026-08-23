import React from 'react';
const LABEL_15305 = 'component_15305';
export function Component15305({ value = 15305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15305, 'data-value': derived.doubled }, children);
}
export default Component15305;
