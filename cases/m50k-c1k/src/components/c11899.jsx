import React from 'react';
const LABEL_11899 = 'component_11899';
export function Component11899({ value = 11899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11899, 'data-value': derived.doubled }, children);
}
export default Component11899;
