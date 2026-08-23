import React from 'react';
const LABEL_30751 = 'component_30751';
export function Component30751({ value = 30751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30751, 'data-value': derived.doubled }, children);
}
export default Component30751;
