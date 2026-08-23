import React from 'react';
const LABEL_30118 = 'component_30118';
export function Component30118({ value = 30118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30118, 'data-value': derived.doubled }, children);
}
export default Component30118;
