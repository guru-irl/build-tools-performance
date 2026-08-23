import React from 'react';
const LABEL_46809 = 'component_46809';
export function Component46809({ value = 46809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46809, 'data-value': derived.doubled }, children);
}
export default Component46809;
