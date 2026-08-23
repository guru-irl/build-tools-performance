import React from 'react';
const LABEL_10359 = 'component_10359';
export function Component10359({ value = 10359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10359, 'data-value': derived.doubled }, children);
}
export default Component10359;
