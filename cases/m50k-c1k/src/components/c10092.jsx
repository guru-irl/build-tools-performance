import React from 'react';
const LABEL_10092 = 'component_10092';
export function Component10092({ value = 10092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10092, 'data-value': derived.doubled }, children);
}
export default Component10092;
