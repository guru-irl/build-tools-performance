import React from 'react';
const LABEL_35599 = 'component_35599';
export function Component35599({ value = 35599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35599, 'data-value': derived.doubled }, children);
}
export default Component35599;
