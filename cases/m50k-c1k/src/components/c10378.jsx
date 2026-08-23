import React from 'react';
const LABEL_10378 = 'component_10378';
export function Component10378({ value = 10378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10378, 'data-value': derived.doubled }, children);
}
export default Component10378;
