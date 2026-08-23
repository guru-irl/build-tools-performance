import React from 'react';
const LABEL_22095 = 'component_22095';
export function Component22095({ value = 22095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22095, 'data-value': derived.doubled }, children);
}
export default Component22095;
