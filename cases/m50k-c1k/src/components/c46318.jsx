import React from 'react';
const LABEL_46318 = 'component_46318';
export function Component46318({ value = 46318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46318, 'data-value': derived.doubled }, children);
}
export default Component46318;
