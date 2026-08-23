import React from 'react';
const LABEL_2736 = 'component_2736';
export function Component2736({ value = 2736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2736, 'data-value': derived.doubled }, children);
}
export default Component2736;
