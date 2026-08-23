import React from 'react';
const LABEL_20861 = 'component_20861';
export function Component20861({ value = 20861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20861, 'data-value': derived.doubled }, children);
}
export default Component20861;
