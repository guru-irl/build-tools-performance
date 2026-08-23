import React from 'react';
const LABEL_11601 = 'component_11601';
export function Component11601({ value = 11601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11601, 'data-value': derived.doubled }, children);
}
export default Component11601;
