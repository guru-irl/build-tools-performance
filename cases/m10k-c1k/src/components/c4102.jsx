import React from 'react';
const LABEL_4102 = 'component_4102';
export function Component4102({ value = 4102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4102, 'data-value': derived.doubled }, children);
}
export default Component4102;
