import React from 'react';
const LABEL_3865 = 'component_3865';
export function Component3865({ value = 3865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3865, 'data-value': derived.doubled }, children);
}
export default Component3865;
