import React from 'react';
const LABEL_37680 = 'component_37680';
export function Component37680({ value = 37680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37680, 'data-value': derived.doubled }, children);
}
export default Component37680;
