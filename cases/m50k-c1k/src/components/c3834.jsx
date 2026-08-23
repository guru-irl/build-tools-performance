import React from 'react';
const LABEL_3834 = 'component_3834';
export function Component3834({ value = 3834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3834, 'data-value': derived.doubled }, children);
}
export default Component3834;
