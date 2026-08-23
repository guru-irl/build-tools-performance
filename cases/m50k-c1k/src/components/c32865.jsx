import React from 'react';
const LABEL_32865 = 'component_32865';
export function Component32865({ value = 32865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32865, 'data-value': derived.doubled }, children);
}
export default Component32865;
