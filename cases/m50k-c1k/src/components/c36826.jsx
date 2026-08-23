import React from 'react';
const LABEL_36826 = 'component_36826';
export function Component36826({ value = 36826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36826, 'data-value': derived.doubled }, children);
}
export default Component36826;
