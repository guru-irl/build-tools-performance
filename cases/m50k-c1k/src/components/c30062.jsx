import React from 'react';
const LABEL_30062 = 'component_30062';
export function Component30062({ value = 30062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30062, 'data-value': derived.doubled }, children);
}
export default Component30062;
