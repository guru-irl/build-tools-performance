import React from 'react';
const LABEL_31091 = 'component_31091';
export function Component31091({ value = 31091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31091, 'data-value': derived.doubled }, children);
}
export default Component31091;
