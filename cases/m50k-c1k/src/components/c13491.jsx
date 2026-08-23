import React from 'react';
const LABEL_13491 = 'component_13491';
export function Component13491({ value = 13491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13491, 'data-value': derived.doubled }, children);
}
export default Component13491;
