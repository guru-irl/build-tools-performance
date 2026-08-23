import React from 'react';
const LABEL_33666 = 'component_33666';
export function Component33666({ value = 33666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33666, 'data-value': derived.doubled }, children);
}
export default Component33666;
