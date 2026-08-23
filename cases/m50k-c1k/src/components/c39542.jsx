import React from 'react';
const LABEL_39542 = 'component_39542';
export function Component39542({ value = 39542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39542, 'data-value': derived.doubled }, children);
}
export default Component39542;
