import React from 'react';
const LABEL_2680 = 'component_2680';
export function Component2680({ value = 2680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2680, 'data-value': derived.doubled }, children);
}
export default Component2680;
