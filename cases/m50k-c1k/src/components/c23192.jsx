import React from 'react';
const LABEL_23192 = 'component_23192';
export function Component23192({ value = 23192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23192, 'data-value': derived.doubled }, children);
}
export default Component23192;
