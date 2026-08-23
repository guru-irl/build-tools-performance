import React from 'react';
const LABEL_21689 = 'component_21689';
export function Component21689({ value = 21689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21689, 'data-value': derived.doubled }, children);
}
export default Component21689;
