import React from 'react';
const LABEL_16759 = 'component_16759';
export function Component16759({ value = 16759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16759, 'data-value': derived.doubled }, children);
}
export default Component16759;
