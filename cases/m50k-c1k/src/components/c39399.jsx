import React from 'react';
const LABEL_39399 = 'component_39399';
export function Component39399({ value = 39399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39399, 'data-value': derived.doubled }, children);
}
export default Component39399;
