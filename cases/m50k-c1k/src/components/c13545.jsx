import React from 'react';
const LABEL_13545 = 'component_13545';
export function Component13545({ value = 13545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13545, 'data-value': derived.doubled }, children);
}
export default Component13545;
