import React from 'react';
const LABEL_21865 = 'component_21865';
export function Component21865({ value = 21865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21865, 'data-value': derived.doubled }, children);
}
export default Component21865;
