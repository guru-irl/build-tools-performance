import React from 'react';
const LABEL_2515 = 'component_2515';
export function Component2515({ value = 2515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2515, 'data-value': derived.doubled }, children);
}
export default Component2515;
