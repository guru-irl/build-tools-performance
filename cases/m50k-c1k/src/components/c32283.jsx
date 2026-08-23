import React from 'react';
const LABEL_32283 = 'component_32283';
export function Component32283({ value = 32283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32283, 'data-value': derived.doubled }, children);
}
export default Component32283;
