import React from 'react';
const LABEL_28680 = 'component_28680';
export function Component28680({ value = 28680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28680, 'data-value': derived.doubled }, children);
}
export default Component28680;
