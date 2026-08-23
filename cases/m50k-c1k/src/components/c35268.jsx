import React from 'react';
const LABEL_35268 = 'component_35268';
export function Component35268({ value = 35268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35268, 'data-value': derived.doubled }, children);
}
export default Component35268;
