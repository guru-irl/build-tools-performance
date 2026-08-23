import React from 'react';
const LABEL_10103 = 'component_10103';
export function Component10103({ value = 10103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10103, 'data-value': derived.doubled }, children);
}
export default Component10103;
