import React from 'react';
const LABEL_18680 = 'component_18680';
export function Component18680({ value = 18680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18680, 'data-value': derived.doubled }, children);
}
export default Component18680;
