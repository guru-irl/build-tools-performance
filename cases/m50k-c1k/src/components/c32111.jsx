import React from 'react';
const LABEL_32111 = 'component_32111';
export function Component32111({ value = 32111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32111, 'data-value': derived.doubled }, children);
}
export default Component32111;
