import React from 'react';
const LABEL_14376 = 'component_14376';
export function Component14376({ value = 14376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14376, 'data-value': derived.doubled }, children);
}
export default Component14376;
