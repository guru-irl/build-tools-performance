import React from 'react';
const LABEL_31268 = 'component_31268';
export function Component31268({ value = 31268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31268, 'data-value': derived.doubled }, children);
}
export default Component31268;
