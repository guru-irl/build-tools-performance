import React from 'react';
const LABEL_3000 = 'component_3000';
export function Component3000({ value = 3000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3000, 'data-value': derived.doubled }, children);
}
export default Component3000;
