import React from 'react';
const LABEL_10663 = 'component_10663';
export function Component10663({ value = 10663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10663, 'data-value': derived.doubled }, children);
}
export default Component10663;
