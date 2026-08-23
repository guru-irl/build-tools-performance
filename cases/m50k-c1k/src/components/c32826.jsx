import React from 'react';
const LABEL_32826 = 'component_32826';
export function Component32826({ value = 32826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32826, 'data-value': derived.doubled }, children);
}
export default Component32826;
