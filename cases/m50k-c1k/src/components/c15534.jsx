import React from 'react';
const LABEL_15534 = 'component_15534';
export function Component15534({ value = 15534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15534, 'data-value': derived.doubled }, children);
}
export default Component15534;
