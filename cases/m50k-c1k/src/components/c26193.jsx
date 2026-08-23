import React from 'react';
const LABEL_26193 = 'component_26193';
export function Component26193({ value = 26193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26193, 'data-value': derived.doubled }, children);
}
export default Component26193;
