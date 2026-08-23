import React from 'react';
const LABEL_34680 = 'component_34680';
export function Component34680({ value = 34680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34680, 'data-value': derived.doubled }, children);
}
export default Component34680;
