import React from 'react';
const LABEL_21485 = 'component_21485';
export function Component21485({ value = 21485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21485, 'data-value': derived.doubled }, children);
}
export default Component21485;
