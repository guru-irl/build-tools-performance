import React from 'react';
const LABEL_23861 = 'component_23861';
export function Component23861({ value = 23861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23861, 'data-value': derived.doubled }, children);
}
export default Component23861;
