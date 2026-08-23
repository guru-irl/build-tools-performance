import React from 'react';
const LABEL_21243 = 'component_21243';
export function Component21243({ value = 21243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21243, 'data-value': derived.doubled }, children);
}
export default Component21243;
