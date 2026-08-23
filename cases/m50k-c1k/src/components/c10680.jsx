import React from 'react';
const LABEL_10680 = 'component_10680';
export function Component10680({ value = 10680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10680, 'data-value': derived.doubled }, children);
}
export default Component10680;
