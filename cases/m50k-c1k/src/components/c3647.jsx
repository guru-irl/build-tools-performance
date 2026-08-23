import React from 'react';
const LABEL_3647 = 'component_3647';
export function Component3647({ value = 3647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3647, 'data-value': derived.doubled }, children);
}
export default Component3647;
