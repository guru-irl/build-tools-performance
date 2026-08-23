import React from 'react';
const LABEL_13878 = 'component_13878';
export function Component13878({ value = 13878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13878, 'data-value': derived.doubled }, children);
}
export default Component13878;
