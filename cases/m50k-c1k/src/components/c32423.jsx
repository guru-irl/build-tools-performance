import React from 'react';
const LABEL_32423 = 'component_32423';
export function Component32423({ value = 32423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32423, 'data-value': derived.doubled }, children);
}
export default Component32423;
