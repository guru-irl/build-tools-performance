import React from 'react';
const LABEL_10597 = 'component_10597';
export function Component10597({ value = 10597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10597, 'data-value': derived.doubled }, children);
}
export default Component10597;
