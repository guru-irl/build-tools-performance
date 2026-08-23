import React from 'react';
const LABEL_16091 = 'component_16091';
export function Component16091({ value = 16091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16091, 'data-value': derived.doubled }, children);
}
export default Component16091;
