import React from 'react';
const LABEL_3599 = 'component_3599';
export function Component3599({ value = 3599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3599, 'data-value': derived.doubled }, children);
}
export default Component3599;
