import React from 'react';
const LABEL_31709 = 'component_31709';
export function Component31709({ value = 31709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31709, 'data-value': derived.doubled }, children);
}
export default Component31709;
