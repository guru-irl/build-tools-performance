import React from 'react';
const LABEL_11617 = 'component_11617';
export function Component11617({ value = 11617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11617, 'data-value': derived.doubled }, children);
}
export default Component11617;
