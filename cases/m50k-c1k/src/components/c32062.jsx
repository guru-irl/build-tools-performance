import React from 'react';
const LABEL_32062 = 'component_32062';
export function Component32062({ value = 32062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32062, 'data-value': derived.doubled }, children);
}
export default Component32062;
