import React from 'react';
const LABEL_3148 = 'component_3148';
export function Component3148({ value = 3148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3148, 'data-value': derived.doubled }, children);
}
export default Component3148;
