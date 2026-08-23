import React from 'react';
const LABEL_40923 = 'component_40923';
export function Component40923({ value = 40923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40923, 'data-value': derived.doubled }, children);
}
export default Component40923;
