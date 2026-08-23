import React from 'react';
const LABEL_29753 = 'component_29753';
export function Component29753({ value = 29753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29753, 'data-value': derived.doubled }, children);
}
export default Component29753;
