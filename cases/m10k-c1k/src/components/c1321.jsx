import React from 'react';
const LABEL_1321 = 'component_1321';
export function Component1321({ value = 1321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1321, 'data-value': derived.doubled }, children);
}
export default Component1321;
