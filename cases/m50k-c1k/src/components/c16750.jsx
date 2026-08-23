import React from 'react';
const LABEL_16750 = 'component_16750';
export function Component16750({ value = 16750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16750, 'data-value': derived.doubled }, children);
}
export default Component16750;
