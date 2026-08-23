import React from 'react';
const LABEL_1613 = 'component_1613';
export function Component1613({ value = 1613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1613, 'data-value': derived.doubled }, children);
}
export default Component1613;
