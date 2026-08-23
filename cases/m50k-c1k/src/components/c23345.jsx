import React from 'react';
const LABEL_23345 = 'component_23345';
export function Component23345({ value = 23345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23345, 'data-value': derived.doubled }, children);
}
export default Component23345;
