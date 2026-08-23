import React from 'react';
const LABEL_43624 = 'component_43624';
export function Component43624({ value = 43624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43624, 'data-value': derived.doubled }, children);
}
export default Component43624;
