import React from 'react';
const LABEL_3861 = 'component_3861';
export function Component3861({ value = 3861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3861, 'data-value': derived.doubled }, children);
}
export default Component3861;
