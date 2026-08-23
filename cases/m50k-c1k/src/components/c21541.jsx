import React from 'react';
const LABEL_21541 = 'component_21541';
export function Component21541({ value = 21541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21541, 'data-value': derived.doubled }, children);
}
export default Component21541;
