import React from 'react';
const LABEL_13680 = 'component_13680';
export function Component13680({ value = 13680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13680, 'data-value': derived.doubled }, children);
}
export default Component13680;
