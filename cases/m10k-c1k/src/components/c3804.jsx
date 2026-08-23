import React from 'react';
const LABEL_3804 = 'component_3804';
export function Component3804({ value = 3804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3804, 'data-value': derived.doubled }, children);
}
export default Component3804;
