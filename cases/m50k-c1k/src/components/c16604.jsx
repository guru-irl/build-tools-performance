import React from 'react';
const LABEL_16604 = 'component_16604';
export function Component16604({ value = 16604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16604, 'data-value': derived.doubled }, children);
}
export default Component16604;
