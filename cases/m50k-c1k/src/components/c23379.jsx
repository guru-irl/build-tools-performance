import React from 'react';
const LABEL_23379 = 'component_23379';
export function Component23379({ value = 23379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23379, 'data-value': derived.doubled }, children);
}
export default Component23379;
