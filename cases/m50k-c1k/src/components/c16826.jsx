import React from 'react';
const LABEL_16826 = 'component_16826';
export function Component16826({ value = 16826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16826, 'data-value': derived.doubled }, children);
}
export default Component16826;
