import React from 'react';
const LABEL_40252 = 'component_40252';
export function Component40252({ value = 40252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40252, 'data-value': derived.doubled }, children);
}
export default Component40252;
