import React from 'react';
const LABEL_3134 = 'component_3134';
export function Component3134({ value = 3134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3134, 'data-value': derived.doubled }, children);
}
export default Component3134;
