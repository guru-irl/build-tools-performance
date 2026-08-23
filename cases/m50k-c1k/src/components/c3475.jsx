import React from 'react';
const LABEL_3475 = 'component_3475';
export function Component3475({ value = 3475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3475, 'data-value': derived.doubled }, children);
}
export default Component3475;
