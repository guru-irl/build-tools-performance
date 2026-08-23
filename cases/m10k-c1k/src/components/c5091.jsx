import React from 'react';
const LABEL_5091 = 'component_5091';
export function Component5091({ value = 5091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5091, 'data-value': derived.doubled }, children);
}
export default Component5091;
