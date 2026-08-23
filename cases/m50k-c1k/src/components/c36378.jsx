import React from 'react';
const LABEL_36378 = 'component_36378';
export function Component36378({ value = 36378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36378, 'data-value': derived.doubled }, children);
}
export default Component36378;
