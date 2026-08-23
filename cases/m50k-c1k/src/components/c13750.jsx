import React from 'react';
const LABEL_13750 = 'component_13750';
export function Component13750({ value = 13750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13750, 'data-value': derived.doubled }, children);
}
export default Component13750;
