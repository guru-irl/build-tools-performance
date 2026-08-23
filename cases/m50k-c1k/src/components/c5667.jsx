import React from 'react';
const LABEL_5667 = 'component_5667';
export function Component5667({ value = 5667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5667, 'data-value': derived.doubled }, children);
}
export default Component5667;
