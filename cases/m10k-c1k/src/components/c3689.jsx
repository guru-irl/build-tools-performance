import React from 'react';
const LABEL_3689 = 'component_3689';
export function Component3689({ value = 3689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3689, 'data-value': derived.doubled }, children);
}
export default Component3689;
