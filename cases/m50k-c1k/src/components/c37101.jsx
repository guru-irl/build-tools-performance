import React from 'react';
const LABEL_37101 = 'component_37101';
export function Component37101({ value = 37101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37101, 'data-value': derived.doubled }, children);
}
export default Component37101;
