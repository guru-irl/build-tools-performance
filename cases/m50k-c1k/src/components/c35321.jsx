import React from 'react';
const LABEL_35321 = 'component_35321';
export function Component35321({ value = 35321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35321, 'data-value': derived.doubled }, children);
}
export default Component35321;
