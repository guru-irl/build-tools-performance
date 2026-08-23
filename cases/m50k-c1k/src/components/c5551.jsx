import React from 'react';
const LABEL_5551 = 'component_5551';
export function Component5551({ value = 5551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5551, 'data-value': derived.doubled }, children);
}
export default Component5551;
