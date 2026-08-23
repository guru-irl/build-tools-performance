import React from 'react';
const LABEL_44321 = 'component_44321';
export function Component44321({ value = 44321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44321, 'data-value': derived.doubled }, children);
}
export default Component44321;
