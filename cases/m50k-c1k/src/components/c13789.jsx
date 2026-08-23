import React from 'react';
const LABEL_13789 = 'component_13789';
export function Component13789({ value = 13789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13789, 'data-value': derived.doubled }, children);
}
export default Component13789;
