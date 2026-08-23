import React from 'react';
const LABEL_31380 = 'component_31380';
export function Component31380({ value = 31380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31380, 'data-value': derived.doubled }, children);
}
export default Component31380;
