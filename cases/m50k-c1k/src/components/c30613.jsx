import React from 'react';
const LABEL_30613 = 'component_30613';
export function Component30613({ value = 30613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30613, 'data-value': derived.doubled }, children);
}
export default Component30613;
