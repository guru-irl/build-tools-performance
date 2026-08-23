import React from 'react';
const LABEL_9118 = 'component_9118';
export function Component9118({ value = 9118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9118, 'data-value': derived.doubled }, children);
}
export default Component9118;
