import React from 'react';
const LABEL_40378 = 'component_40378';
export function Component40378({ value = 40378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40378, 'data-value': derived.doubled }, children);
}
export default Component40378;
