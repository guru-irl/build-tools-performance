import React from 'react';
const LABEL_32356 = 'component_32356';
export function Component32356({ value = 32356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32356, 'data-value': derived.doubled }, children);
}
export default Component32356;
