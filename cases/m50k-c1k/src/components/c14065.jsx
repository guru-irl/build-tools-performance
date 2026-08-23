import React from 'react';
const LABEL_14065 = 'component_14065';
export function Component14065({ value = 14065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14065, 'data-value': derived.doubled }, children);
}
export default Component14065;
