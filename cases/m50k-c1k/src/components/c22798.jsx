import React from 'react';
const LABEL_22798 = 'component_22798';
export function Component22798({ value = 22798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22798, 'data-value': derived.doubled }, children);
}
export default Component22798;
