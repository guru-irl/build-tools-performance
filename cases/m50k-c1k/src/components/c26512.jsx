import React from 'react';
const LABEL_26512 = 'component_26512';
export function Component26512({ value = 26512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26512, 'data-value': derived.doubled }, children);
}
export default Component26512;
