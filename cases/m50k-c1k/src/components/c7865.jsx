import React from 'react';
const LABEL_7865 = 'component_7865';
export function Component7865({ value = 7865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7865, 'data-value': derived.doubled }, children);
}
export default Component7865;
