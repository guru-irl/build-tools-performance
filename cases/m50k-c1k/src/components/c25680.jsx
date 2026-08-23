import React from 'react';
const LABEL_25680 = 'component_25680';
export function Component25680({ value = 25680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25680, 'data-value': derived.doubled }, children);
}
export default Component25680;
