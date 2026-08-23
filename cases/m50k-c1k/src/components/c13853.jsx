import React from 'react';
const LABEL_13853 = 'component_13853';
export function Component13853({ value = 13853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13853, 'data-value': derived.doubled }, children);
}
export default Component13853;
