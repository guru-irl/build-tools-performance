import React from 'react';
const LABEL_10965 = 'component_10965';
export function Component10965({ value = 10965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10965, 'data-value': derived.doubled }, children);
}
export default Component10965;
