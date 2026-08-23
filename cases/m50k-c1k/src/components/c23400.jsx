import React from 'react';
const LABEL_23400 = 'component_23400';
export function Component23400({ value = 23400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23400, 'data-value': derived.doubled }, children);
}
export default Component23400;
