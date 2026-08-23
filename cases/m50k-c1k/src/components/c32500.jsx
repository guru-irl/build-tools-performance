import React from 'react';
const LABEL_32500 = 'component_32500';
export function Component32500({ value = 32500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32500, 'data-value': derived.doubled }, children);
}
export default Component32500;
