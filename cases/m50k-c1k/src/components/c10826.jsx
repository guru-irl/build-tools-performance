import React from 'react';
const LABEL_10826 = 'component_10826';
export function Component10826({ value = 10826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10826, 'data-value': derived.doubled }, children);
}
export default Component10826;
