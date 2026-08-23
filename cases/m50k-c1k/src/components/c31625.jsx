import React from 'react';
const LABEL_31625 = 'component_31625';
export function Component31625({ value = 31625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31625, 'data-value': derived.doubled }, children);
}
export default Component31625;
