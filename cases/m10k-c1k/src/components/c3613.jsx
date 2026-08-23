import React from 'react';
const LABEL_3613 = 'component_3613';
export function Component3613({ value = 3613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3613, 'data-value': derived.doubled }, children);
}
export default Component3613;
