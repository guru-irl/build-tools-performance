import React from 'react';
const LABEL_3233 = 'component_3233';
export function Component3233({ value = 3233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3233, 'data-value': derived.doubled }, children);
}
export default Component3233;
