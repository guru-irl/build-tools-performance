import React from 'react';
const LABEL_39710 = 'component_39710';
export function Component39710({ value = 39710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39710, 'data-value': derived.doubled }, children);
}
export default Component39710;
