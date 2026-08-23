import React from 'react';
const LABEL_10134 = 'component_10134';
export function Component10134({ value = 10134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10134, 'data-value': derived.doubled }, children);
}
export default Component10134;
