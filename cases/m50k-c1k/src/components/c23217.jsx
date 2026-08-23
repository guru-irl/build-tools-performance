import React from 'react';
const LABEL_23217 = 'component_23217';
export function Component23217({ value = 23217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23217, 'data-value': derived.doubled }, children);
}
export default Component23217;
