import React from 'react';
const LABEL_38826 = 'component_38826';
export function Component38826({ value = 38826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38826, 'data-value': derived.doubled }, children);
}
export default Component38826;
