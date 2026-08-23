import React from 'react';
const LABEL_11321 = 'component_11321';
export function Component11321({ value = 11321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11321, 'data-value': derived.doubled }, children);
}
export default Component11321;
