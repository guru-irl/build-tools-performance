import React from 'react';
const LABEL_23455 = 'component_23455';
export function Component23455({ value = 23455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23455, 'data-value': derived.doubled }, children);
}
export default Component23455;
