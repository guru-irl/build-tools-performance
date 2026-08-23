import React from 'react';
const LABEL_7133 = 'component_7133';
export function Component7133({ value = 7133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7133, 'data-value': derived.doubled }, children);
}
export default Component7133;
