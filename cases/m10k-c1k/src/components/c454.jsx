import React from 'react';
const LABEL_454 = 'component_454';
export function Component454({ value = 454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_454, 'data-value': derived.doubled }, children);
}
export default Component454;
