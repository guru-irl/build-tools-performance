import React from 'react';
const LABEL_22613 = 'component_22613';
export function Component22613({ value = 22613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22613, 'data-value': derived.doubled }, children);
}
export default Component22613;
