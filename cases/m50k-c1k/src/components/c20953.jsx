import React from 'react';
const LABEL_20953 = 'component_20953';
export function Component20953({ value = 20953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20953, 'data-value': derived.doubled }, children);
}
export default Component20953;
