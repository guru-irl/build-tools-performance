import React from 'react';
const LABEL_35957 = 'component_35957';
export function Component35957({ value = 35957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35957, 'data-value': derived.doubled }, children);
}
export default Component35957;
