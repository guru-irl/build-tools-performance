import React from 'react';
const LABEL_14484 = 'component_14484';
export function Component14484({ value = 14484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14484, 'data-value': derived.doubled }, children);
}
export default Component14484;
