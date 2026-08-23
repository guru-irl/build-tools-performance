import React from 'react';
const LABEL_11288 = 'component_11288';
export function Component11288({ value = 11288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11288, 'data-value': derived.doubled }, children);
}
export default Component11288;
