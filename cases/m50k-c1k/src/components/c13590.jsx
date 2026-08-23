import React from 'react';
const LABEL_13590 = 'component_13590';
export function Component13590({ value = 13590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13590, 'data-value': derived.doubled }, children);
}
export default Component13590;
