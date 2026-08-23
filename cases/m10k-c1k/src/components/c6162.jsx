import React from 'react';
const LABEL_6162 = 'component_6162';
export function Component6162({ value = 6162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6162, 'data-value': derived.doubled }, children);
}
export default Component6162;
