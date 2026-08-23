import React from 'react';
const LABEL_15288 = 'component_15288';
export function Component15288({ value = 15288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15288, 'data-value': derived.doubled }, children);
}
export default Component15288;
