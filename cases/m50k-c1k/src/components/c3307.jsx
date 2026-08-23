import React from 'react';
const LABEL_3307 = 'component_3307';
export function Component3307({ value = 3307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3307, 'data-value': derived.doubled }, children);
}
export default Component3307;
