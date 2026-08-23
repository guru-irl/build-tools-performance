import React from 'react';
const LABEL_38680 = 'component_38680';
export function Component38680({ value = 38680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38680, 'data-value': derived.doubled }, children);
}
export default Component38680;
