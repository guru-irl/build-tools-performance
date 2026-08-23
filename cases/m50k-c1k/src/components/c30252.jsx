import React from 'react';
const LABEL_30252 = 'component_30252';
export function Component30252({ value = 30252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30252, 'data-value': derived.doubled }, children);
}
export default Component30252;
