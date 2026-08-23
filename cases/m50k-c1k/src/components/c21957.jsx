import React from 'react';
const LABEL_21957 = 'component_21957';
export function Component21957({ value = 21957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21957, 'data-value': derived.doubled }, children);
}
export default Component21957;
