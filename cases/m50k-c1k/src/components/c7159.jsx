import React from 'react';
const LABEL_7159 = 'component_7159';
export function Component7159({ value = 7159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7159, 'data-value': derived.doubled }, children);
}
export default Component7159;
