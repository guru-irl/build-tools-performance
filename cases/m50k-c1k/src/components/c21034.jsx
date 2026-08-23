import React from 'react';
const LABEL_21034 = 'component_21034';
export function Component21034({ value = 21034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21034, 'data-value': derived.doubled }, children);
}
export default Component21034;
