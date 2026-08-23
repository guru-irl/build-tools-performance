import React from 'react';
const LABEL_6083 = 'component_6083';
export function Component6083({ value = 6083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6083, 'data-value': derived.doubled }, children);
}
export default Component6083;
