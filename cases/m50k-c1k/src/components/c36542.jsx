import React from 'react';
const LABEL_36542 = 'component_36542';
export function Component36542({ value = 36542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36542, 'data-value': derived.doubled }, children);
}
export default Component36542;
