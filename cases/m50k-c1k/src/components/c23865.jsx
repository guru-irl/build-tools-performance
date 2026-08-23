import React from 'react';
const LABEL_23865 = 'component_23865';
export function Component23865({ value = 23865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23865, 'data-value': derived.doubled }, children);
}
export default Component23865;
