import React from 'react';
const LABEL_36321 = 'component_36321';
export function Component36321({ value = 36321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36321, 'data-value': derived.doubled }, children);
}
export default Component36321;
