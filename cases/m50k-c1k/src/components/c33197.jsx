import React from 'react';
const LABEL_33197 = 'component_33197';
export function Component33197({ value = 33197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33197, 'data-value': derived.doubled }, children);
}
export default Component33197;
