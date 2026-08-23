import React from 'react';
const LABEL_2508 = 'component_2508';
export function Component2508({ value = 2508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2508, 'data-value': derived.doubled }, children);
}
export default Component2508;
