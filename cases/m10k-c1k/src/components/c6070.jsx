import React from 'react';
const LABEL_6070 = 'component_6070';
export function Component6070({ value = 6070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6070, 'data-value': derived.doubled }, children);
}
export default Component6070;
