import React from 'react';
const LABEL_8378 = 'component_8378';
export function Component8378({ value = 8378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8378, 'data-value': derived.doubled }, children);
}
export default Component8378;
