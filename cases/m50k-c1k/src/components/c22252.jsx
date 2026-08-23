import React from 'react';
const LABEL_22252 = 'component_22252';
export function Component22252({ value = 22252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22252, 'data-value': derived.doubled }, children);
}
export default Component22252;
