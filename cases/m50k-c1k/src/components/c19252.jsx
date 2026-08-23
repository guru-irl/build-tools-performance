import React from 'react';
const LABEL_19252 = 'component_19252';
export function Component19252({ value = 19252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19252, 'data-value': derived.doubled }, children);
}
export default Component19252;
