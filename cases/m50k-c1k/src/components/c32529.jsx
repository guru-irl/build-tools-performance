import React from 'react';
const LABEL_32529 = 'component_32529';
export function Component32529({ value = 32529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32529, 'data-value': derived.doubled }, children);
}
export default Component32529;
