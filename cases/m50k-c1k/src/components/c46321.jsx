import React from 'react';
const LABEL_46321 = 'component_46321';
export function Component46321({ value = 46321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46321, 'data-value': derived.doubled }, children);
}
export default Component46321;
