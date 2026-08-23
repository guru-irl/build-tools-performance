import React from 'react';
const LABEL_30097 = 'component_30097';
export function Component30097({ value = 30097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30097, 'data-value': derived.doubled }, children);
}
export default Component30097;
