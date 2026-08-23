import React from 'react';
const LABEL_15334 = 'component_15334';
export function Component15334({ value = 15334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15334, 'data-value': derived.doubled }, children);
}
export default Component15334;
