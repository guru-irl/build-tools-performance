import React from 'react';
const LABEL_21888 = 'component_21888';
export function Component21888({ value = 21888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21888, 'data-value': derived.doubled }, children);
}
export default Component21888;
