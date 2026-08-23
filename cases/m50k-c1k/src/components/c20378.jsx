import React from 'react';
const LABEL_20378 = 'component_20378';
export function Component20378({ value = 20378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20378, 'data-value': derived.doubled }, children);
}
export default Component20378;
