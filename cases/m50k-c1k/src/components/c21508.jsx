import React from 'react';
const LABEL_21508 = 'component_21508';
export function Component21508({ value = 21508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21508, 'data-value': derived.doubled }, children);
}
export default Component21508;
