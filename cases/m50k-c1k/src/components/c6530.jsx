import React from 'react';
const LABEL_6530 = 'component_6530';
export function Component6530({ value = 6530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6530, 'data-value': derived.doubled }, children);
}
export default Component6530;
