import React from 'react';
const LABEL_33111 = 'component_33111';
export function Component33111({ value = 33111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33111, 'data-value': derived.doubled }, children);
}
export default Component33111;
