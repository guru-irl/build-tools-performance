import React from 'react';
const LABEL_32014 = 'component_32014';
export function Component32014({ value = 32014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32014, 'data-value': derived.doubled }, children);
}
export default Component32014;
