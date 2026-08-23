import React from 'react';
const LABEL_22369 = 'component_22369';
export function Component22369({ value = 22369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22369, 'data-value': derived.doubled }, children);
}
export default Component22369;
