import React from 'react';
const LABEL_32512 = 'component_32512';
export function Component32512({ value = 32512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32512, 'data-value': derived.doubled }, children);
}
export default Component32512;
