import React from 'react';
const LABEL_32005 = 'component_32005';
export function Component32005({ value = 32005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32005, 'data-value': derived.doubled }, children);
}
export default Component32005;
