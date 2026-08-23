import React from 'react';
const LABEL_7101 = 'component_7101';
export function Component7101({ value = 7101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7101, 'data-value': derived.doubled }, children);
}
export default Component7101;
