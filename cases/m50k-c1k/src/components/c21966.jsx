import React from 'react';
const LABEL_21966 = 'component_21966';
export function Component21966({ value = 21966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21966, 'data-value': derived.doubled }, children);
}
export default Component21966;
