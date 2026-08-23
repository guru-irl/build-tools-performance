import React from 'react';
const LABEL_31330 = 'component_31330';
export function Component31330({ value = 31330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31330, 'data-value': derived.doubled }, children);
}
export default Component31330;
