import React from 'react';
const LABEL_44525 = 'component_44525';
export function Component44525({ value = 44525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44525, 'data-value': derived.doubled }, children);
}
export default Component44525;
