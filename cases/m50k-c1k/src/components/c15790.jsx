import React from 'react';
const LABEL_15790 = 'component_15790';
export function Component15790({ value = 15790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15790, 'data-value': derived.doubled }, children);
}
export default Component15790;
