import React from 'react';
const LABEL_32174 = 'component_32174';
export function Component32174({ value = 32174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32174, 'data-value': derived.doubled }, children);
}
export default Component32174;
