import React from 'react';
const LABEL_2379 = 'component_2379';
export function Component2379({ value = 2379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2379, 'data-value': derived.doubled }, children);
}
export default Component2379;
