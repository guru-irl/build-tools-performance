import React from 'react';
const LABEL_36953 = 'component_36953';
export function Component36953({ value = 36953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36953, 'data-value': derived.doubled }, children);
}
export default Component36953;
