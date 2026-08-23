import React from 'react';
const LABEL_36091 = 'component_36091';
export function Component36091({ value = 36091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36091, 'data-value': derived.doubled }, children);
}
export default Component36091;
