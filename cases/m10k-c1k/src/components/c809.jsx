import React from 'react';
const LABEL_809 = 'component_809';
export function Component809({ value = 809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_809, 'data-value': derived.doubled }, children);
}
export default Component809;
