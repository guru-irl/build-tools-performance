import React from 'react';
const LABEL_21356 = 'component_21356';
export function Component21356({ value = 21356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21356, 'data-value': derived.doubled }, children);
}
export default Component21356;
