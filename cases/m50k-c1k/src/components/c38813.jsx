import React from 'react';
const LABEL_38813 = 'component_38813';
export function Component38813({ value = 38813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38813, 'data-value': derived.doubled }, children);
}
export default Component38813;
