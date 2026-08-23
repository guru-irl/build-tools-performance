import React from 'react';
const LABEL_39097 = 'component_39097';
export function Component39097({ value = 39097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39097, 'data-value': derived.doubled }, children);
}
export default Component39097;
