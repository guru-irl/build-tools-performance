import React from 'react';
const LABEL_32953 = 'component_32953';
export function Component32953({ value = 32953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32953, 'data-value': derived.doubled }, children);
}
export default Component32953;
