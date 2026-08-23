import React from 'react';
const LABEL_32212 = 'component_32212';
export function Component32212({ value = 32212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32212, 'data-value': derived.doubled }, children);
}
export default Component32212;
