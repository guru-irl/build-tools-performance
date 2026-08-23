import React from 'react';
const LABEL_3175 = 'component_3175';
export function Component3175({ value = 3175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3175, 'data-value': derived.doubled }, children);
}
export default Component3175;
