import React from 'react';
const LABEL_2604 = 'component_2604';
export function Component2604({ value = 2604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2604, 'data-value': derived.doubled }, children);
}
export default Component2604;
