import React from 'react';
const LABEL_23525 = 'component_23525';
export function Component23525({ value = 23525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23525, 'data-value': derived.doubled }, children);
}
export default Component23525;
