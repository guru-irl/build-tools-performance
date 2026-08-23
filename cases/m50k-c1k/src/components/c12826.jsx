import React from 'react';
const LABEL_12826 = 'component_12826';
export function Component12826({ value = 12826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12826, 'data-value': derived.doubled }, children);
}
export default Component12826;
