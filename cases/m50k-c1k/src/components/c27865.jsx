import React from 'react';
const LABEL_27865 = 'component_27865';
export function Component27865({ value = 27865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27865, 'data-value': derived.doubled }, children);
}
export default Component27865;
