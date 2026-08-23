import React from 'react';
const LABEL_14380 = 'component_14380';
export function Component14380({ value = 14380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14380, 'data-value': derived.doubled }, children);
}
export default Component14380;
