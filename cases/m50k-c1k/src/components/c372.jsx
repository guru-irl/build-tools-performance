import React from 'react';
const LABEL_372 = 'component_372';
export function Component372({ value = 372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_372, 'data-value': derived.doubled }, children);
}
export default Component372;
