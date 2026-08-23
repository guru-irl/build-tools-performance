import React from 'react';
const LABEL_1091 = 'component_1091';
export function Component1091({ value = 1091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1091, 'data-value': derived.doubled }, children);
}
export default Component1091;
