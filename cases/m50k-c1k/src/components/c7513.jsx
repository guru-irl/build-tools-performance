import React from 'react';
const LABEL_7513 = 'component_7513';
export function Component7513({ value = 7513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7513, 'data-value': derived.doubled }, children);
}
export default Component7513;
