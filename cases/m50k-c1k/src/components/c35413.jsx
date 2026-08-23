import React from 'react';
const LABEL_35413 = 'component_35413';
export function Component35413({ value = 35413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35413, 'data-value': derived.doubled }, children);
}
export default Component35413;
