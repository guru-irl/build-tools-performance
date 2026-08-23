import React from 'react';
const LABEL_8091 = 'component_8091';
export function Component8091({ value = 8091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8091, 'data-value': derived.doubled }, children);
}
export default Component8091;
