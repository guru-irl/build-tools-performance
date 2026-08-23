import React from 'react';
const LABEL_43369 = 'component_43369';
export function Component43369({ value = 43369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43369, 'data-value': derived.doubled }, children);
}
export default Component43369;
