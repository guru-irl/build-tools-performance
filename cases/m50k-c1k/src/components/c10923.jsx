import React from 'react';
const LABEL_10923 = 'component_10923';
export function Component10923({ value = 10923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10923, 'data-value': derived.doubled }, children);
}
export default Component10923;
