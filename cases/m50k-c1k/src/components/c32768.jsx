import React from 'react';
const LABEL_32768 = 'component_32768';
export function Component32768({ value = 32768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32768, 'data-value': derived.doubled }, children);
}
export default Component32768;
