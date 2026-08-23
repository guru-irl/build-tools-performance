import React from 'react';
const LABEL_14747 = 'component_14747';
export function Component14747({ value = 14747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14747, 'data-value': derived.doubled }, children);
}
export default Component14747;
