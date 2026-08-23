import React from 'react';
const LABEL_32160 = 'component_32160';
export function Component32160({ value = 32160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32160, 'data-value': derived.doubled }, children);
}
export default Component32160;
