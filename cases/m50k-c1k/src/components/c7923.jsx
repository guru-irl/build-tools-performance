import React from 'react';
const LABEL_7923 = 'component_7923';
export function Component7923({ value = 7923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7923, 'data-value': derived.doubled }, children);
}
export default Component7923;
