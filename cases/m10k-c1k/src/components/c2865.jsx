import React from 'react';
const LABEL_2865 = 'component_2865';
export function Component2865({ value = 2865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2865, 'data-value': derived.doubled }, children);
}
export default Component2865;
