import React from 'react';
const LABEL_4321 = 'component_4321';
export function Component4321({ value = 4321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4321, 'data-value': derived.doubled }, children);
}
export default Component4321;
