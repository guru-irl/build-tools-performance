import React from 'react';
const LABEL_31689 = 'component_31689';
export function Component31689({ value = 31689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31689, 'data-value': derived.doubled }, children);
}
export default Component31689;
