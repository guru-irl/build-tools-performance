import React from 'react';
const LABEL_33865 = 'component_33865';
export function Component33865({ value = 33865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33865, 'data-value': derived.doubled }, children);
}
export default Component33865;
