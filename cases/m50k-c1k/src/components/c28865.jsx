import React from 'react';
const LABEL_28865 = 'component_28865';
export function Component28865({ value = 28865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28865, 'data-value': derived.doubled }, children);
}
export default Component28865;
