import React from 'react';
const LABEL_31382 = 'component_31382';
export function Component31382({ value = 31382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31382, 'data-value': derived.doubled }, children);
}
export default Component31382;
