import React from 'react';
const LABEL_134 = 'component_134';
export function Component134({ value = 134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_134, 'data-value': derived.doubled }, children);
}
export default Component134;
