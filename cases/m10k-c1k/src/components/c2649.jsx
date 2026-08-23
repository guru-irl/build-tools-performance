import React from 'react';
const LABEL_2649 = 'component_2649';
export function Component2649({ value = 2649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2649, 'data-value': derived.doubled }, children);
}
export default Component2649;
