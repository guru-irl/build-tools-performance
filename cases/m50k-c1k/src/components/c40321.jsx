import React from 'react';
const LABEL_40321 = 'component_40321';
export function Component40321({ value = 40321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40321, 'data-value': derived.doubled }, children);
}
export default Component40321;
