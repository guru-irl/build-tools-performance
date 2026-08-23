import React from 'react';
const LABEL_15672 = 'component_15672';
export function Component15672({ value = 15672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15672, 'data-value': derived.doubled }, children);
}
export default Component15672;
