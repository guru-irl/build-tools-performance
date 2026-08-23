import React from 'react';
const LABEL_6193 = 'component_6193';
export function Component6193({ value = 6193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6193, 'data-value': derived.doubled }, children);
}
export default Component6193;
