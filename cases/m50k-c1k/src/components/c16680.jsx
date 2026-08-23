import React from 'react';
const LABEL_16680 = 'component_16680';
export function Component16680({ value = 16680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16680, 'data-value': derived.doubled }, children);
}
export default Component16680;
