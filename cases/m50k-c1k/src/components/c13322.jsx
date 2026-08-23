import React from 'react';
const LABEL_13322 = 'component_13322';
export function Component13322({ value = 13322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13322, 'data-value': derived.doubled }, children);
}
export default Component13322;
