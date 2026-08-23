import React from 'react';
const LABEL_15923 = 'component_15923';
export function Component15923({ value = 15923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15923, 'data-value': derived.doubled }, children);
}
export default Component15923;
