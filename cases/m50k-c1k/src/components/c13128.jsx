import React from 'react';
const LABEL_13128 = 'component_13128';
export function Component13128({ value = 13128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13128, 'data-value': derived.doubled }, children);
}
export default Component13128;
