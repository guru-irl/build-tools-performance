import React from 'react';
const LABEL_23122 = 'component_23122';
export function Component23122({ value = 23122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23122, 'data-value': derived.doubled }, children);
}
export default Component23122;
