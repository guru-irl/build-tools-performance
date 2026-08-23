import React from 'react';
const LABEL_32683 = 'component_32683';
export function Component32683({ value = 32683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32683, 'data-value': derived.doubled }, children);
}
export default Component32683;
