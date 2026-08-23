import React from 'react';
const LABEL_16307 = 'component_16307';
export function Component16307({ value = 16307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16307, 'data-value': derived.doubled }, children);
}
export default Component16307;
