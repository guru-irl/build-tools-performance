import React from 'react';
const LABEL_33387 = 'component_33387';
export function Component33387({ value = 33387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33387, 'data-value': derived.doubled }, children);
}
export default Component33387;
