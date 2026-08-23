import React from 'react';
const LABEL_31378 = 'component_31378';
export function Component31378({ value = 31378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31378, 'data-value': derived.doubled }, children);
}
export default Component31378;
