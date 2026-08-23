import React from 'react';
const LABEL_3499 = 'component_3499';
export function Component3499({ value = 3499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3499, 'data-value': derived.doubled }, children);
}
export default Component3499;
