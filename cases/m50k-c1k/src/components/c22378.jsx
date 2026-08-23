import React from 'react';
const LABEL_22378 = 'component_22378';
export function Component22378({ value = 22378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22378, 'data-value': derived.doubled }, children);
}
export default Component22378;
