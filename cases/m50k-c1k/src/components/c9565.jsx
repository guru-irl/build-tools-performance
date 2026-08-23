import React from 'react';
const LABEL_9565 = 'component_9565';
export function Component9565({ value = 9565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9565, 'data-value': derived.doubled }, children);
}
export default Component9565;
