import React from 'react';
const LABEL_23923 = 'component_23923';
export function Component23923({ value = 23923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23923, 'data-value': derived.doubled }, children);
}
export default Component23923;
