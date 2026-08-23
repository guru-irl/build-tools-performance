import React from 'react';
const LABEL_22091 = 'component_22091';
export function Component22091({ value = 22091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22091, 'data-value': derived.doubled }, children);
}
export default Component22091;
