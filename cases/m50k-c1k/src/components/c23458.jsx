import React from 'react';
const LABEL_23458 = 'component_23458';
export function Component23458({ value = 23458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23458, 'data-value': derived.doubled }, children);
}
export default Component23458;
