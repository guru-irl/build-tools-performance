import React from 'react';
const LABEL_21892 = 'component_21892';
export function Component21892({ value = 21892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21892, 'data-value': derived.doubled }, children);
}
export default Component21892;
