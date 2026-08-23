import React from 'react';
const LABEL_23143 = 'component_23143';
export function Component23143({ value = 23143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23143, 'data-value': derived.doubled }, children);
}
export default Component23143;
