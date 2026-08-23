import React from 'react';
const LABEL_18091 = 'component_18091';
export function Component18091({ value = 18091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18091, 'data-value': derived.doubled }, children);
}
export default Component18091;
