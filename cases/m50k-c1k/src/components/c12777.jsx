import React from 'react';
const LABEL_12777 = 'component_12777';
export function Component12777({ value = 12777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12777, 'data-value': derived.doubled }, children);
}
export default Component12777;
