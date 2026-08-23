import React from 'react';
const LABEL_7680 = 'component_7680';
export function Component7680({ value = 7680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7680, 'data-value': derived.doubled }, children);
}
export default Component7680;
