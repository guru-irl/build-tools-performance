import React from 'react';
const LABEL_36322 = 'component_36322';
export function Component36322({ value = 36322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36322, 'data-value': derived.doubled }, children);
}
export default Component36322;
