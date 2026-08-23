import React from 'react';
const LABEL_23766 = 'component_23766';
export function Component23766({ value = 23766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23766, 'data-value': derived.doubled }, children);
}
export default Component23766;
