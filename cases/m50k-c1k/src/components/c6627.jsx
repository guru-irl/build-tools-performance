import React from 'react';
const LABEL_6627 = 'component_6627';
export function Component6627({ value = 6627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6627, 'data-value': derived.doubled }, children);
}
export default Component6627;
