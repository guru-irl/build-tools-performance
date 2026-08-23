import React from 'react';
const LABEL_21790 = 'component_21790';
export function Component21790({ value = 21790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21790, 'data-value': derived.doubled }, children);
}
export default Component21790;
