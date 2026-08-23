import React from 'react';
const LABEL_3140 = 'component_3140';
export function Component3140({ value = 3140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3140, 'data-value': derived.doubled }, children);
}
export default Component3140;
