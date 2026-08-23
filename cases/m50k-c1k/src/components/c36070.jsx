import React from 'react';
const LABEL_36070 = 'component_36070';
export function Component36070({ value = 36070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36070, 'data-value': derived.doubled }, children);
}
export default Component36070;
