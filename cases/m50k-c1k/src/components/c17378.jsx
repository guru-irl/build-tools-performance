import React from 'react';
const LABEL_17378 = 'component_17378';
export function Component17378({ value = 17378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17378, 'data-value': derived.doubled }, children);
}
export default Component17378;
