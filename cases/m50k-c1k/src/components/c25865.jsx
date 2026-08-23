import React from 'react';
const LABEL_25865 = 'component_25865';
export function Component25865({ value = 25865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25865, 'data-value': derived.doubled }, children);
}
export default Component25865;
