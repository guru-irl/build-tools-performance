import React from 'react';
const LABEL_42118 = 'component_42118';
export function Component42118({ value = 42118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42118, 'data-value': derived.doubled }, children);
}
export default Component42118;
