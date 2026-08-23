import React from 'react';
const LABEL_21517 = 'component_21517';
export function Component21517({ value = 21517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21517, 'data-value': derived.doubled }, children);
}
export default Component21517;
