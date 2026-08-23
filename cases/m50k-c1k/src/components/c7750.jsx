import React from 'react';
const LABEL_7750 = 'component_7750';
export function Component7750({ value = 7750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7750, 'data-value': derived.doubled }, children);
}
export default Component7750;
