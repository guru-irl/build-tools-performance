import React from 'react';
const LABEL_21359 = 'component_21359';
export function Component21359({ value = 21359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21359, 'data-value': derived.doubled }, children);
}
export default Component21359;
