import React from 'react';
const LABEL_4750 = 'component_4750';
export function Component4750({ value = 4750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4750, 'data-value': derived.doubled }, children);
}
export default Component4750;
