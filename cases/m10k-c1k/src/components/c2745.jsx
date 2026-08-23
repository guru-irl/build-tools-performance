import React from 'react';
const LABEL_2745 = 'component_2745';
export function Component2745({ value = 2745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2745, 'data-value': derived.doubled }, children);
}
export default Component2745;
