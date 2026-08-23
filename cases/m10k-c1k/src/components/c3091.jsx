import React from 'react';
const LABEL_3091 = 'component_3091';
export function Component3091({ value = 3091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3091, 'data-value': derived.doubled }, children);
}
export default Component3091;
