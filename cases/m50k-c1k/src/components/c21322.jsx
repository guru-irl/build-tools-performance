import React from 'react';
const LABEL_21322 = 'component_21322';
export function Component21322({ value = 21322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21322, 'data-value': derived.doubled }, children);
}
export default Component21322;
