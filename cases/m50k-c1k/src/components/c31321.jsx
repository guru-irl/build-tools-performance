import React from 'react';
const LABEL_31321 = 'component_31321';
export function Component31321({ value = 31321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31321, 'data-value': derived.doubled }, children);
}
export default Component31321;
