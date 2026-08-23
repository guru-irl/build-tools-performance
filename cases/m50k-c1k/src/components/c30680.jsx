import React from 'react';
const LABEL_30680 = 'component_30680';
export function Component30680({ value = 30680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30680, 'data-value': derived.doubled }, children);
}
export default Component30680;
