import React from 'react';
const LABEL_31923 = 'component_31923';
export function Component31923({ value = 31923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31923, 'data-value': derived.doubled }, children);
}
export default Component31923;
