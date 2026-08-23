import React from 'react';
const LABEL_23760 = 'component_23760';
export function Component23760({ value = 23760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23760, 'data-value': derived.doubled }, children);
}
export default Component23760;
