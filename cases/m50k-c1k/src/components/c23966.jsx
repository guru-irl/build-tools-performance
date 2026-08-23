import React from 'react';
const LABEL_23966 = 'component_23966';
export function Component23966({ value = 23966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23966, 'data-value': derived.doubled }, children);
}
export default Component23966;
