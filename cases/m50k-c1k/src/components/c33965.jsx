import React from 'react';
const LABEL_33965 = 'component_33965';
export function Component33965({ value = 33965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33965, 'data-value': derived.doubled }, children);
}
export default Component33965;
