import React from 'react';
const LABEL_10173 = 'component_10173';
export function Component10173({ value = 10173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10173, 'data-value': derived.doubled }, children);
}
export default Component10173;
