import React from 'react';
const LABEL_22521 = 'component_22521';
export function Component22521({ value = 22521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22521, 'data-value': derived.doubled }, children);
}
export default Component22521;
