import React from 'react';
const LABEL_26134 = 'component_26134';
export function Component26134({ value = 26134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26134, 'data-value': derived.doubled }, children);
}
export default Component26134;
