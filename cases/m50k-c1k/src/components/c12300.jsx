import React from 'react';
const LABEL_12300 = 'component_12300';
export function Component12300({ value = 12300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12300, 'data-value': derived.doubled }, children);
}
export default Component12300;
