import React from 'react';
const LABEL_3564 = 'component_3564';
export function Component3564({ value = 3564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3564, 'data-value': derived.doubled }, children);
}
export default Component3564;
