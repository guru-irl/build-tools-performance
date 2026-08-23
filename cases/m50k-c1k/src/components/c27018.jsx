import React from 'react';
const LABEL_27018 = 'component_27018';
export function Component27018({ value = 27018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27018, 'data-value': derived.doubled }, children);
}
export default Component27018;
