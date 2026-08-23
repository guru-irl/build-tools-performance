import React from 'react';
const LABEL_41715 = 'component_41715';
export function Component41715({ value = 41715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41715, 'data-value': derived.doubled }, children);
}
export default Component41715;
