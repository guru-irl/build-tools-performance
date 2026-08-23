import React from 'react';
const LABEL_3523 = 'component_3523';
export function Component3523({ value = 3523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3523, 'data-value': derived.doubled }, children);
}
export default Component3523;
