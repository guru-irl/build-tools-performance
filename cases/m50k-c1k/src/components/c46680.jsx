import React from 'react';
const LABEL_46680 = 'component_46680';
export function Component46680({ value = 46680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46680, 'data-value': derived.doubled }, children);
}
export default Component46680;
