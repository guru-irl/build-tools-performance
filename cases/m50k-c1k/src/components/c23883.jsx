import React from 'react';
const LABEL_23883 = 'component_23883';
export function Component23883({ value = 23883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23883, 'data-value': derived.doubled }, children);
}
export default Component23883;
