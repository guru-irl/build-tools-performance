import React from 'react';
const LABEL_21959 = 'component_21959';
export function Component21959({ value = 21959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21959, 'data-value': derived.doubled }, children);
}
export default Component21959;
