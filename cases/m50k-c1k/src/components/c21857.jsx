import React from 'react';
const LABEL_21857 = 'component_21857';
export function Component21857({ value = 21857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21857, 'data-value': derived.doubled }, children);
}
export default Component21857;
