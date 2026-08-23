import React from 'react';
const LABEL_32725 = 'component_32725';
export function Component32725({ value = 32725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32725, 'data-value': derived.doubled }, children);
}
export default Component32725;
