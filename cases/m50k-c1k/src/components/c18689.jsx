import React from 'react';
const LABEL_18689 = 'component_18689';
export function Component18689({ value = 18689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18689, 'data-value': derived.doubled }, children);
}
export default Component18689;
