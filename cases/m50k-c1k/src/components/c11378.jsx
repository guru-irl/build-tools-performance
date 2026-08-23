import React from 'react';
const LABEL_11378 = 'component_11378';
export function Component11378({ value = 11378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11378, 'data-value': derived.doubled }, children);
}
export default Component11378;
