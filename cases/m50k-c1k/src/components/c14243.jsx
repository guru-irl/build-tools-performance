import React from 'react';
const LABEL_14243 = 'component_14243';
export function Component14243({ value = 14243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14243, 'data-value': derived.doubled }, children);
}
export default Component14243;
