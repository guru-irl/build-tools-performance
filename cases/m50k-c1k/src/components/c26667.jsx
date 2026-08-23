import React from 'react';
const LABEL_26667 = 'component_26667';
export function Component26667({ value = 26667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26667, 'data-value': derived.doubled }, children);
}
export default Component26667;
