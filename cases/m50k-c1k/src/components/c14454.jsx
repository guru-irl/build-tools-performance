import React from 'react';
const LABEL_14454 = 'component_14454';
export function Component14454({ value = 14454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14454, 'data-value': derived.doubled }, children);
}
export default Component14454;
