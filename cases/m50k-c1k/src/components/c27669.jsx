import React from 'react';
const LABEL_27669 = 'component_27669';
export function Component27669({ value = 27669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27669, 'data-value': derived.doubled }, children);
}
export default Component27669;
