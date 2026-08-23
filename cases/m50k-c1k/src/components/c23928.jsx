import React from 'react';
const LABEL_23928 = 'component_23928';
export function Component23928({ value = 23928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23928, 'data-value': derived.doubled }, children);
}
export default Component23928;
