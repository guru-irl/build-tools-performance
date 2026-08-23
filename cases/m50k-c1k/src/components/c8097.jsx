import React from 'react';
const LABEL_8097 = 'component_8097';
export function Component8097({ value = 8097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8097, 'data-value': derived.doubled }, children);
}
export default Component8097;
