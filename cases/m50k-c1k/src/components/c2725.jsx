import React from 'react';
const LABEL_2725 = 'component_2725';
export function Component2725({ value = 2725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2725, 'data-value': derived.doubled }, children);
}
export default Component2725;
