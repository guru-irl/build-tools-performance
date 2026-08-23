import React from 'react';
const LABEL_45865 = 'component_45865';
export function Component45865({ value = 45865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45865, 'data-value': derived.doubled }, children);
}
export default Component45865;
