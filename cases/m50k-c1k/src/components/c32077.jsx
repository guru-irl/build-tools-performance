import React from 'react';
const LABEL_32077 = 'component_32077';
export function Component32077({ value = 32077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32077, 'data-value': derived.doubled }, children);
}
export default Component32077;
