import React from 'react';
const LABEL_24134 = 'component_24134';
export function Component24134({ value = 24134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24134, 'data-value': derived.doubled }, children);
}
export default Component24134;
