import React from 'react';
const LABEL_5321 = 'component_5321';
export function Component5321({ value = 5321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5321, 'data-value': derived.doubled }, children);
}
export default Component5321;
