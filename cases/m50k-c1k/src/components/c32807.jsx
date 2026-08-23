import React from 'react';
const LABEL_32807 = 'component_32807';
export function Component32807({ value = 32807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32807, 'data-value': derived.doubled }, children);
}
export default Component32807;
