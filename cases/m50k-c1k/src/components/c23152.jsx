import React from 'react';
const LABEL_23152 = 'component_23152';
export function Component23152({ value = 23152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23152, 'data-value': derived.doubled }, children);
}
export default Component23152;
