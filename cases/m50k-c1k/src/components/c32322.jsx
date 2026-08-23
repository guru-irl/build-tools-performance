import React from 'react';
const LABEL_32322 = 'component_32322';
export function Component32322({ value = 32322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32322, 'data-value': derived.doubled }, children);
}
export default Component32322;
