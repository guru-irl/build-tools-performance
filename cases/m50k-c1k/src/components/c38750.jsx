import React from 'react';
const LABEL_38750 = 'component_38750';
export function Component38750({ value = 38750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38750, 'data-value': derived.doubled }, children);
}
export default Component38750;
