import React from 'react';
const LABEL_23443 = 'component_23443';
export function Component23443({ value = 23443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23443, 'data-value': derived.doubled }, children);
}
export default Component23443;
