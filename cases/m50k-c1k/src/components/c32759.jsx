import React from 'react';
const LABEL_32759 = 'component_32759';
export function Component32759({ value = 32759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32759, 'data-value': derived.doubled }, children);
}
export default Component32759;
