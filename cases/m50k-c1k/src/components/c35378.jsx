import React from 'react';
const LABEL_35378 = 'component_35378';
export function Component35378({ value = 35378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35378, 'data-value': derived.doubled }, children);
}
export default Component35378;
