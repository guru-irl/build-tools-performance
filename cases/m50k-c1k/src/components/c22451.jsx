import React from 'react';
const LABEL_22451 = 'component_22451';
export function Component22451({ value = 22451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22451, 'data-value': derived.doubled }, children);
}
export default Component22451;
