import React from 'react';
const LABEL_26625 = 'component_26625';
export function Component26625({ value = 26625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26625, 'data-value': derived.doubled }, children);
}
export default Component26625;
