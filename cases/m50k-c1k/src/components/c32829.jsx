import React from 'react';
const LABEL_32829 = 'component_32829';
export function Component32829({ value = 32829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32829, 'data-value': derived.doubled }, children);
}
export default Component32829;
