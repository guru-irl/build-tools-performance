import React from 'react';
const LABEL_11680 = 'component_11680';
export function Component11680({ value = 11680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11680, 'data-value': derived.doubled }, children);
}
export default Component11680;
