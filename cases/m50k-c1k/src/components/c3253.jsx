import React from 'react';
const LABEL_3253 = 'component_3253';
export function Component3253({ value = 3253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3253, 'data-value': derived.doubled }, children);
}
export default Component3253;
