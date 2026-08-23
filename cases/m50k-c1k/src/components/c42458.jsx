import React from 'react';
const LABEL_42458 = 'component_42458';
export function Component42458({ value = 42458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42458, 'data-value': derived.doubled }, children);
}
export default Component42458;
