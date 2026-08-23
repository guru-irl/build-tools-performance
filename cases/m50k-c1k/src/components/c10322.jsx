import React from 'react';
const LABEL_10322 = 'component_10322';
export function Component10322({ value = 10322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10322, 'data-value': derived.doubled }, children);
}
export default Component10322;
