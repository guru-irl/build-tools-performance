import React from 'react';
const LABEL_13830 = 'component_13830';
export function Component13830({ value = 13830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13830, 'data-value': derived.doubled }, children);
}
export default Component13830;
