import React from 'react';
const LABEL_23091 = 'component_23091';
export function Component23091({ value = 23091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23091, 'data-value': derived.doubled }, children);
}
export default Component23091;
