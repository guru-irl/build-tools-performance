import React from 'react';
const LABEL_3953 = 'component_3953';
export function Component3953({ value = 3953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3953, 'data-value': derived.doubled }, children);
}
export default Component3953;
