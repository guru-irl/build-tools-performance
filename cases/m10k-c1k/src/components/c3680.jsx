import React from 'react';
const LABEL_3680 = 'component_3680';
export function Component3680({ value = 3680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3680, 'data-value': derived.doubled }, children);
}
export default Component3680;
