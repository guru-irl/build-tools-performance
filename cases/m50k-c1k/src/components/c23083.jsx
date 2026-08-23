import React from 'react';
const LABEL_23083 = 'component_23083';
export function Component23083({ value = 23083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23083, 'data-value': derived.doubled }, children);
}
export default Component23083;
