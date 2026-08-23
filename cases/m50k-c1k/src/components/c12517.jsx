import React from 'react';
const LABEL_12517 = 'component_12517';
export function Component12517({ value = 12517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12517, 'data-value': derived.doubled }, children);
}
export default Component12517;
