import React from 'react';
const LABEL_21945 = 'component_21945';
export function Component21945({ value = 21945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21945, 'data-value': derived.doubled }, children);
}
export default Component21945;
