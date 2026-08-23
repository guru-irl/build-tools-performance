import React from 'react';
const LABEL_23549 = 'component_23549';
export function Component23549({ value = 23549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23549, 'data-value': derived.doubled }, children);
}
export default Component23549;
