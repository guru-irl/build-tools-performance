import React from 'react';
const LABEL_20747 = 'component_20747';
export function Component20747({ value = 20747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20747, 'data-value': derived.doubled }, children);
}
export default Component20747;
