import React from 'react';
const LABEL_21666 = 'component_21666';
export function Component21666({ value = 21666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21666, 'data-value': derived.doubled }, children);
}
export default Component21666;
