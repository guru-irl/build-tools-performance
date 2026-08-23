import React from 'react';
const LABEL_23750 = 'component_23750';
export function Component23750({ value = 23750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23750, 'data-value': derived.doubled }, children);
}
export default Component23750;
