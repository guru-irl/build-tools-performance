import React from 'react';
const LABEL_7455 = 'component_7455';
export function Component7455({ value = 7455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7455, 'data-value': derived.doubled }, children);
}
export default Component7455;
