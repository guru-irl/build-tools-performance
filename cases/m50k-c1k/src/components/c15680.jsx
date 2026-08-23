import React from 'react';
const LABEL_15680 = 'component_15680';
export function Component15680({ value = 15680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15680, 'data-value': derived.doubled }, children);
}
export default Component15680;
