import React from 'react';
const LABEL_21853 = 'component_21853';
export function Component21853({ value = 21853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21853, 'data-value': derived.doubled }, children);
}
export default Component21853;
