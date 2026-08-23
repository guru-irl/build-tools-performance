import React from 'react';
const LABEL_3217 = 'component_3217';
export function Component3217({ value = 3217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3217, 'data-value': derived.doubled }, children);
}
export default Component3217;
