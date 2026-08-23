import React from 'react';
const LABEL_39971 = 'component_39971';
export function Component39971({ value = 39971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39971, 'data-value': derived.doubled }, children);
}
export default Component39971;
