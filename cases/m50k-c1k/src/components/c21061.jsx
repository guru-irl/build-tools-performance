import React from 'react';
const LABEL_21061 = 'component_21061';
export function Component21061({ value = 21061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21061, 'data-value': derived.doubled }, children);
}
export default Component21061;
