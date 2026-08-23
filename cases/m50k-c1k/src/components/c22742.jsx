import React from 'react';
const LABEL_22742 = 'component_22742';
export function Component22742({ value = 22742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22742, 'data-value': derived.doubled }, children);
}
export default Component22742;
