import React from 'react';
const LABEL_36990 = 'component_36990';
export function Component36990({ value = 36990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36990, 'data-value': derived.doubled }, children);
}
export default Component36990;
