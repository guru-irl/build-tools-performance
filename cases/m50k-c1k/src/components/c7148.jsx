import React from 'react';
const LABEL_7148 = 'component_7148';
export function Component7148({ value = 7148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7148, 'data-value': derived.doubled }, children);
}
export default Component7148;
