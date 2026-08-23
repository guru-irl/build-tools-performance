import React from 'react';
const LABEL_2409 = 'component_2409';
export function Component2409({ value = 2409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2409, 'data-value': derived.doubled }, children);
}
export default Component2409;
