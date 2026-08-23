import React from 'react';
const LABEL_26530 = 'component_26530';
export function Component26530({ value = 26530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26530, 'data-value': derived.doubled }, children);
}
export default Component26530;
