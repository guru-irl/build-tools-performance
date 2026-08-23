import React from 'react';
const LABEL_13672 = 'component_13672';
export function Component13672({ value = 13672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13672, 'data-value': derived.doubled }, children);
}
export default Component13672;
