import React from 'react';
const LABEL_26689 = 'component_26689';
export function Component26689({ value = 26689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26689, 'data-value': derived.doubled }, children);
}
export default Component26689;
