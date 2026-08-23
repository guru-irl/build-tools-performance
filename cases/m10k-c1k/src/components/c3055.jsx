import React from 'react';
const LABEL_3055 = 'component_3055';
export function Component3055({ value = 3055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3055, 'data-value': derived.doubled }, children);
}
export default Component3055;
