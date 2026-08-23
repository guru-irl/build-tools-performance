import React from 'react';
const LABEL_19680 = 'component_19680';
export function Component19680({ value = 19680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19680, 'data-value': derived.doubled }, children);
}
export default Component19680;
