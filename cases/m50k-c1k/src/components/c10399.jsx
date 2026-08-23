import React from 'react';
const LABEL_10399 = 'component_10399';
export function Component10399({ value = 10399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10399, 'data-value': derived.doubled }, children);
}
export default Component10399;
